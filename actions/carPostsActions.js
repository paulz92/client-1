import { getLatestPostsQueryString } from '@/api'
import { apolloFetch } from '@/utils'

export const FETCHING_POSTS = 'FETCHING_POSTS'
export const RECIEVE_POSTS = 'RECIEVE_POSTS'
export const RECIEVE_ERROR = 'RECIEVE_ERROR'
export const ADD_COMMENT = 'ADD_COMMENT'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'
export const ADD_POST = 'ADD_POST'

export const fetchingPosts = () => ({ type: FETCHING_POSTS })
export const recieveError = () => ({ type: RECIEVE_ERROR })
export const recievePosts = posts => ({
  type: RECIEVE_POSTS,
  payload: { posts },
})

export const addComment = (postId, comment) => ({
  type: ADD_COMMENT,
  payload: { postId, comment }
})

export const addPost = post => ({
  type: ADD_POST,
  payload: { post }
})

export const toggleLike = (postId, user) => ({
  type: TOGGLE_LIKE,
  payload: { postId, user }
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
      dispatch(recieveError(err))
    }
  }
}

export const commentOnPost = (postId, message) => {
  return async (dispatch, getState) => {
    try {
      // fetch here
      let errors = null
      
      if (errors) throw errors

      const { user } = getState().auth

      dispatch(addComment(postId, { body: message, commenter: user }))
    } catch (err) { /* swallow errors for now */ }
  }
}

export const togglePostFavorite = postId => {
  return async (dispatch, getState) => {
    try {
      // fetch here
      let errors = null

      if (errors) throw errors

      const { user } = getState().auth
      dispatch(toggleLike(postId, user))
    } catch (err) { console.log(err) }
  }
}
