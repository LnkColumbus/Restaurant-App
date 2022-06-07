import { Provider } from 'react-redux';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { store } from './app/store';
import { theme } from './themes';

import { AppRouter } from './routes/AppRouter';

const App = () => {
  return (
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
