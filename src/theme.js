import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[300],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: ['Nunito', 'Open Sans'].join(',')
   }
 
});

export default theme;