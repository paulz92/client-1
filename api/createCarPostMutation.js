export const createCarPostMutationString = `
  mutation createCarPost(
    $nickname: String!,
    $carModelName: String!,
    $carMakeName: String!,
    $tags: [String],
    $body: String!,
    $year: Int!,
    $pictureUrls: [String]!,
  ) {
    newPost: createCarPost(
      nickname: $nickname,
      carModelName: $carModelName,
      carMakeName: $carMakeName,
      body: $body,
      tags: $tags,
      year: $year,
      saleStatus: notForSale,
      pictureUrls: $pictureUrls
    ) {
      id
      nickname
      year
      pictureUrls
      body
      primaryPictureIndex
      owner {
        username
        firstname
        lastname
        avatarUrl
      }
      comments {
        id
        body
        commenter {
          username
          firstname
          lastname
          avatarUrl
        }
      }
      carModel {
        name
        make {
          name
        }
      }
      tags {
        id
        name
      }
      favorites {
        user {
          id
          firstname
          lastname
          username
        }
      }
      pins {
        user {
          id
          firstname
          lastname
          username
        }
      }
    }
  }
`
