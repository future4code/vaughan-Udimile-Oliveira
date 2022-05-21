import { createTheme } from '@mui/material/styles';
import { primaryColor, neutralColor } from './colors';

export const theme = createTheme({
  palette: {
    primary: {

      main: primaryColor,
      contrastText: '#5F5950'
    },
    text: {

    },
    secondary: {
      main: neutralColor
    }
  },
  typography: {

    fontFamily: [
      // '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      'Roboto',
      // '"Helvetica Neue"',
      // 'Arial',
      // 'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme 