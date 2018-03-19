import { combineReducers } from 'redux'

import auth from './authReducer'
import layout from './layoutReducer'
import carPosts from './carPostsReducer'

export default combineReducers({
  auth,
  layout,
  carPosts,
})
