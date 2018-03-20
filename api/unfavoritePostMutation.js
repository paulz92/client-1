export const unfavoritePostMutationString = `
  mutation unfavoritePostMutation(
    $post: ID!,
  ) {
    data: unfavoritePost(post: $post) {
      id
    }
  }
`
