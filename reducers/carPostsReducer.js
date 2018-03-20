import {
  FETCHING_POSTS,
  RECIEVE_POSTS,
  RECIEVE_ERROR,
  ADD_COMMENT,
  TOGGLE_LIKE,
  ADD_POST
} from '@/actions'

const initialState = {
  posts: [],
  loading: false,
  error: false,
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_COMMENT:
      return {
        ...state,
        posts: [...state.posts.map(post =>
          (post.id === payload.postId)
            ? { ...post, comments: [...post.comments, payload.comment] }
            : post
        )]
      }
    case TOGGLE_LIKE:
      return {
        ...state,
        posts: [...state.posts.map(post => {
          if (post.id !== payload.postId) return post
          const likeRef = post.favorites.find(fav => fav.user.id === payload.user.id)
          return {
            ...post,
            favorites: likeRef
              ? [...post.favorites.filter(fav => fav.user.id !== payload.user.id)]
              : [...post.favorites, { user: payload.user }]
          }
        })]
      }
    case ADD_POST:
      return { ...state, posts: [ payload.post, ...state.posts ] }
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
