import React from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import Head from 'next/head'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import fetch from 'isomorphic-unfetch'

let apolloClient = null

if (!process.browser) {
  global.fetch = fetch
}

function create(initialState, { getToken }) {
  const httpLink = createHttpLink({
    uri: 'https://torq-api.herokuapp.com/graphql',
    credentials: 'same-origin'
  })

  const authLink = setContext((_, { headers }) => {
    const token = getToken()
    return {
      headers: {
        ...headers,
        Cookie: token ? token : null
      }
    }
  })

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {})
  })
}

function initApollo(initialState, options) {
  if (!process.browser) {
    return create(initialState, options)
  }

  if (!apolloClient) {
    apolloClient = create(initialState, options)
  }

  return apolloClient
}


function getCookie(context = {}) {
  return context.req && context.req.headers.cookie
    ? context.req.headers.cookie
    : document.cookie
}

export const withApollo = ComposedComponent => {
  return class WithData extends React.Component {
    static displayName = `WithData(${ComposedComponent.displayName})`
    static propTypes = {
      serverState: PropTypes.object.isRequired
    }

    static async getInitialProps(context) {
      let serverState = {}

      let apollo = initApollo(
        {},
        {
          getToken: () => getCookie(context)
        }
      )

      let composedInitialProps = {}
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(
          context,
          apollo
        )
      }

      if (!process.browser) {
        if (context.res && context.res.finished) {
          return
        }

        const url = { query: context.query, pathname: context.pathname }
        try {
          // Run all GraphQL queries
          const app = (
            <ApolloProvider client={apollo}>
              <ComposedComponent url={url} {...composedInitialProps} />
            </ApolloProvider>
          )
          await getDataFromTree(app, {
            router: {
              query: context.query,
              pathname: context.pathname,
              asPath: context.asPath
            }
          })
        } catch (err) {
          // swallow all errors to preserve ssr
        }

        Head.rewind()

        // Extract query data from the Apollo's store
        serverState = apollo.cache.extract()
      }

      return {
        serverState,
        ...composedInitialProps
      }
    }

    constructor(props) {
      super(props)

      this.apollo = initApollo(this.props.serverState, {
        getToken: () => getCookie()
      })
    }

    render() {
      return (
        <ApolloProvider client={this.apollo}>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      )
    }
  }
}
