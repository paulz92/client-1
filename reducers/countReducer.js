import { Map } from 'immutable'

import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actions'

const initialState = Map({
  count: 0,
})

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 1 }
    case DECREMENT_COUNT:
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}
