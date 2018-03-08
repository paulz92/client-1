import cookies from 'js-cookie'

export default ({ count }) => {
  const state = { count }
  try {
    const serializedState = JSON.stringify(state)
    cookies.set('state', serializedState)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.error(`Error serializing state: ${err}`)
  }
}
