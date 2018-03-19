import { getLatestPostsQueryString } from '@/api'
import { apolloFetch } from '@/utils'

export const FETCHING_POSTS = 'FETCHING_POSTS'
export const RECIEVE_POSTS = 'RECIEVE_POSTS'
export const RECIEVE_ERROR = 'RECIEVE_ERROR'

export const fetchingPosts = () => ({ type: FETCHING_POSTS })
export const recieveError = () => ({ type: RECIEVE_ERROR })
export const recievePosts = posts => ({
  type: RECIEVE_POSTS,
  payload: { posts },
})

export const fetchPosts = () => {
  return async dispatch => {
    try {
      dispatch(fetchingPosts())

      const { data, errors } = await apolloFetch({
        query: getLatestPostsQueryString,
      })

      if (errors) throw errors

      const { posts } = data
      if (!posts) throw new Error('posts was nil')

      dispatch(recievePosts(posts))
    } catch (err) {
      console.error('Error fetching posts', err)
      dispatch(recieveError())
    }
  }
}
