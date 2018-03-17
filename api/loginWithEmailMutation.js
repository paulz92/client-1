import gql from 'graphql-tag'

export const loginWithEmail = `
  mutation loginWithEmail(
    $email: String!,
    $pass: String!
  ) {
    buffer: loginWithEmail(
      email: $email,
      password: $pass
    ) {
      token
      user {
        username
        email
        firstname
        lastname
        role
        joinedAt
        avatarUrl
      }
    }
  }
`

export const loginWithEmailMutation = gql(loginWithEmail)
