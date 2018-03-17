import { createApolloFetch } from 'apollo-fetch';

export const apolloFetch = createApolloFetch({
  uri: 'https://torq-api.herokuapp.com/graphql',
})
