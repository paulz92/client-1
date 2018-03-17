import { SET_USER, UNSET_USER } from '@/actions'

const initialState = {
  user: null,
  token: null,
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_USER:
      const { user, token } = payload
      return { ...state, user, token }
    case UNSET_USER:
      return { ...state, user: null, token: null }
    default:
      return state
  }
}
