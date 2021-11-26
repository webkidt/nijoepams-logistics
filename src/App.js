import { ThemeProvider, Grid, useMediaQuery, Container } from '@mui/material';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
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
          <Grid item xs={12}>
            <Main></Main>
          </Grid>
        ) : (
          <Grid
            item
            container
            sx={{
              minHeight: '100vh',
              minWidth: '100vw',
              flexGrow: 1,
              backgroundImage: `url(${backgroundImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              backgroundSize: 'cover',
            }}
          >
            {/* <Container fixed>
              <Main></Main>
            </Container> */}
            <Main></Main>
          </Grid>
        )}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
