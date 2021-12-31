import { ThemeProvider, Box } from '@mui/material';
import Header from './components/Header/Header';
import Sections from './components/containers/Sections';
import theme from './theme/theme';
import backgroundImage from './assets/w2.jpg';
// import Footer from './components/Footer/Footer';

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
        <Sections />
        {/* <Footer /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
