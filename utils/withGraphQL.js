import { compose, graphql } from 'react-apollo'

export const withGraphQL = schemas =>
  compose(Object.keys(schemas)
    .map(key => {
      const schema = schemas[key]
      return graphql(schema, { name: key })
    }))
