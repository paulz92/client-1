export const favoritePostMutationString = `
  mutation favoritePostMutation(
    $post: ID!,
  ) {
    data: favoritePost(post: $post) {
      id
    }
  }
`
