import { ThemeProvider, Grid, useMediaQuery } from '@mui/material';
import Header from './components/Header/Header';
import theme from './theme/theme';
import backgroundImage from './assets/w2.jpg';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        {useMediaQuery(theme.breakpoints.down('sm')) ? (
          <Grid item xs={12}></Grid>
        ) : (
          <Grid
            item
            container
            sx={{
              minHeight: '100vh',
              flexGrow: 1,
              backgroundImage: `url(${backgroundImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              backgroundSize: 'cover',
            }}
          ></Grid>
        )}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
