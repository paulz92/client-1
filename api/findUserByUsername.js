import gql from 'graphql-tag'

export const findUserByUsername = `
  query findUserByUsername($user: String!) {
    findUserByUsername(username: $user) {
      id
    }
  }
`

export const findUserByUsernameQuery = gql(findUserByUsername)
