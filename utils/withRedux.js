import $withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

export const withRedux = (mapStateToProps, mapDispatchToProps) => (
  $withRedux(initStore, mapStateToProps, mapDispatchToProps)
)
