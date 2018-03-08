import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from '../reducers'
import persistState from './persistState'
import rehydrateState from './rehydrateState'

export const initStore = (initialState, { isServer, req }) => {
  const store = createStore(
    rootReducer,
    initialState || rehydrateState({ isServer, req }),
    composeWithDevTools(
      applyMiddleware(thunk, logger)
    ),
  )

  store.subscribe(() => persistState(store.getState()))

  return store
}
