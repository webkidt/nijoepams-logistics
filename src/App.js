import { ThemeProvider, Grid, Typography } from '@mui/material';
import Header from './components/Header/Header';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Typography>Hello</Typography>
          <Typography>Hello</Typography>
          <Typography>Hello</Typography>
          <Typography>Hello</Typography>
          <Typography>Hello</Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
