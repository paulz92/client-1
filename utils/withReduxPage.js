import $withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

export const withReduxPage = (mapStateToProps, mapDispatchToProps) => (
  $withRedux(initStore, mapStateToProps, mapDispatchToProps)
)
