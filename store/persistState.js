import cookies from 'js-cookie'

export default ({ auth }) => {
  const state = { auth }
  try {
    const serializedState = JSON.stringify(state)
    cookies.set('state', serializedState)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.error(`Error serializing state: ${err}`)
  }
}
