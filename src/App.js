import { ThemeProvider, Box } from '@mui/material';
import Header from './components/Header/Header';
import SectionsContainer from './components/containers/SectionsContainer';
import theme from './theme/theme';
import backgroundImage from './assets/w2.jpg';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'left top',
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat',
          backgroundAttachment: 'scroll',
        }}
      >
        <Header />
        <SectionsContainer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
