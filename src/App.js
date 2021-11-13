import { ThemeProvider, Grid } from '@mui/material';
import Header from './components/Header';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
