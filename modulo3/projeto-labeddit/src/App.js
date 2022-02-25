import theme from './constants/theme';
import { Router } from './Router/Router'
import {ThemeProvider} from '@mui/material/styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
