import gql from 'graphql-tag'

export const getAuthSubjectByUsername = `
  query findUserByUsername($user: String!) {
    subject: findUserByUsername(username: $user) {
      avatarUrl
      firstname
    }
  }
`

export const getAuthSubjectByUsernameQuery =
  gql(getAuthSubjectByUsername)
