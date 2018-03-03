export default ({ count }) => {
  const state = { count }
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.error(`Error serializing state: ${err}`)
  }
}
