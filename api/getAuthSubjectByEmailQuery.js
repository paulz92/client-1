import gql from 'graphql-tag'

export const getAuthSubjectByEmail = `
  query findUserByUsername($email: String!) {
    subject: findUserByEmail(email: $email) {
      avatarUrl
      firstname
    }
  }
`

export const getAuthSubjectByEmailQuery =
  gql(getAuthSubjectByEmail)
