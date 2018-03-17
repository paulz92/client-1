import { connect } from 'react-redux'

export const withRedux = (mapStateToProps, mapDispatchToProps) => {
  return connect(mapStateToProps, mapDispatchToProps)
}
