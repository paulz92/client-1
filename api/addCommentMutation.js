export const addCommentMutationString = `
  mutation addComment(
    $post: ID!,
    $body: String!,
  ) {
    data: addComment(
      post: $post,
      body: $body
    ) {
      id
    }
  }
`
