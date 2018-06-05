import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';

export const rally = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey['800']
    },
    secondary: {
      main: grey['800']
    }
  }
});
