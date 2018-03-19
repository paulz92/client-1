import gql from 'graphql-tag'

export const loginMutation = gql`
  mutation login($user: String!, $pass: String!) {
    buffer: login(username: $user, password: $pass) {
      token
      user {
        id
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
