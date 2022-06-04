import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouter } from './routes/AppRouter';
import { theme } from './themes';

const App = () => {
  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
