import { createApolloFetch } from 'apollo-fetch';

const getTokenFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem('state'))
      .auth
      .token
  } catch (err) { return undefined }
}

const $apolloFetch = createApolloFetch({
  uri: 'https://torq-api.herokuapp.com/graphql',
  headers: {
    Authorization: getTokenFromLocalStorage()
  }
})

$apolloFetch.use(({ request, options }, next) => {
  if (!options.headers)
    options.headers = {}

  if (!options.headers['Authorization'])
    options.headers['Authorization'] = getTokenFromLocalStorage()

  next()
})

export const apolloFetch = $apolloFetch
