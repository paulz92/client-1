import {
  FETCHING_POSTS,
  RECIEVE_POSTS,
  RECIEVE_ERROR,
} from '@/actions'

const initialState = {
  posts: [],
  loading: false,
  error: false,
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case FETCHING_POSTS:
      return { ...state, loading: true }
    case RECIEVE_ERROR:
      return { ...state, error: true }
    case RECIEVE_POSTS:
      return {
        ...state,
        loading: false,
        error: false,
        posts: payload.posts
      }
    default:
      return state
  }
} 
