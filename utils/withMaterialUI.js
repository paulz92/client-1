import { createMuiTheme } from 'material-ui/styles'
import { blue50 } from 'material-ui/colors'
import { withMaterialUI as $withMaterialUI } from 'pretty-next'

const theme = createMuiTheme({
  palette: { 
    primary: blue50
  }
})

export const withMaterialUI = () => $withMaterialUI(theme)
