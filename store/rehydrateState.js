export default () => {
  // can't get state from server; need browser env
  if (!process.browser) return undefined

  try {
    const serializedState = localStorage.getItem('state')
    return serializedState === null ?
      undefined : JSON.parse(serializedState)
  } catch (err) {
    console.error(`Error loading state ${err.message}`)
    return undefined
  }
}
