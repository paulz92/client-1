export default ({ isServer, req }) => {
  try {
    const serializedState = isServer
      ? req.cookies.state
      : localStorage.getItem('state')

    return serializedState === null ?
      undefined : JSON.parse(serializedState)
  } catch (err) {
    console.error(`Error loading state ${err.message}`)
    return undefined
  }
}
