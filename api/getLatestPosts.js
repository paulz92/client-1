import gql from 'graphql-tag'

export const getLatestPostsQueryString = `
  query {
    posts: findAllCarPosts {
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

export const getLatestPostsQuery =
  gql(getLatestPostsQueryString)

