import { createTheme } from '@mui/material/styles';
import { primaryColor, neutralColor } from './colors';


const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,

    },
    text: {
        primary: neutralColor
    }
  },
  typography: {
    
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme