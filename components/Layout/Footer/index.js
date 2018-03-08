export const Footer = () => {
  const year = (new Date()).getFullYear()
  return (
    <footer style={{ textAlign: 'center', padding: '10px 0' }}>
      &copy; {year} Torq, Inc.
    </footer>
  )
}
