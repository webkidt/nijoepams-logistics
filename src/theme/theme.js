import { createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import '@fontsource/spectral/300.css';
import '@fontsource/spectral/700.css';
import '@fontsource/karla';

let theme = createTheme({
  palette: {
    secondary: {
      main: pink[500],
    }
  },
  typography: {
    fontFamily: '"Karla", "Roboto", "Helvetica", sans-serif',
    bigTitle: {
      fontFamily: '"Spectral", "Roboto", "Helvetica", sans-serif',
      fontWeight: 700,
      fontSize: '5rem',
      lineHeight: 1.4,
      // letterSpacing: '-0.01562em',
      color: 'white',
    },
    subTitle: {
      fontFamily: '"Spectral", "Roboto", "Helvetica", sans-serif',
      fontWeight: 300,
      fontSize: '1.3rem',
      lineHeight: 1.618,
    },
  },
});

theme = createTheme(theme, {
  typography: {
    bigTitle: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '3rem',
      },
    },
  },
});

export default theme;
