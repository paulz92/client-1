import { AppBar, Toolbar, Typography, Button, IconButton } from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu'
import MoreIcon from 'material-ui-icons/MoreVert'

const TORQ_RED = '#B71C1C'

export const Header = () => (
  <header>
    <AppBar position="static" style={{ display: 'flex', background: '#fff' }}>
      <Toolbar>
        <IconButton style={{ color: TORQ_RED }} aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" style={{ color: TORQ_RED }}>
          Torq
        </Typography>
        <IconButton style={{ marginLeft: 'auto', color: TORQ_RED }}>
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </header>
)
