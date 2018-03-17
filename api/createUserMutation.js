import gql from 'graphql-tag'

export const createUser = `
  mutation createUser(
    $firstname: String!,
    $lastname: String!,
    $username: String!,
    $email: String!,
    $password: String!,
    $avatarUrl: String
  ) {
    createUser (
      firstname: $firstname,
      lastname: $lastname,
      username: $username,
      email: $email,
      password: $password,
      avatarUrl: $avatarUrl
    ) {
      id
      username
      avatarUrl
    }
  }
`

export const createUserMutation = gql(createUser)
