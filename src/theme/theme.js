import { createTheme } from '@mui/material/styles';
import { pink, indigo } from '@mui/material/colors';
import '@fontsource/spectral/300.css';
import '@fontsource/spectral/700.css';
import '@fontsource/karla';

let theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: pink[500],
    },
    subGrey: '#999999',
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
    featureTitle: {
      fontFamily: '"Spectral", "Roboto", "Helvetica", sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.618,
    },
    description: {
      fontFamily: '"Spectral", "Roboto", "Helvetica", sans-serif',
      fontWeight: 300,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    feature: {
      fontFamily: '"Spectral", "Roboto", "Helvetica", sans-serif',
      fontWeight: 700,
      fontSize: '19px',
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
    featureTitle: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '24px',
      },
    },
    description: {},
  },
});

export default theme;
