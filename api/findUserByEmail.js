import gql from 'graphql-tag'

export const findUserByEmail = `
  query findUserByEmail($email: String!) {
    findUserByEmail(email: $email) {
      id
    }
  }
`

export const findUserByEmailQuery = gql(findUserByEmail)
