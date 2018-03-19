import gql from 'graphql-tag'

export const getLatestPostsQuery = gql`
  query {
    res: findAllCarPosts {
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
    }
  }
`
