import { ThemeProvider } from '@mui/material';
import Header from './components/Header';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
