import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Stack,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
// import {withStyles} from '@mui/material/styles';
// import { bgcolor } from '@mui/system';
// import Image from 'mui-image';
import bigTitleImage from '../assets/w1.jpg';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url(${bigTitleImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  },
  bigTitleContainer: {
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  bigTitle: {
    color: '#ffffff',
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <AppBar position='static' color='transparent' elevation={0}>
        <Container>
          <Toolbar>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1, color: 'common.white' }}
            >
              NIJOEPAMS
            </Typography>
            <Button href='#' sx={{ color: 'common.white' }}>
              Home
            </Button>
            <Button href='#' sx={{ color: 'common.white' }}>
              Services
            </Button>
            <Button href='#' sx={{ color: 'common.white' }}>
              Contact
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Container fixed sx={{ padding: '100px 0' }}>
        <Box
          sx={{
            minHeight: '70vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            px: 1,
          }}
        >
          <Stack
            justifyContent='center'
            alignItems='center'
            spacing={3}
            sx={{ color: 'common.white', textAlign: 'center' }}
          >
            <Typography align='center' variant='bigTitle'>
              Logistics For Businesses Of All Types
            </Typography>
            <Typography variant='subTitle'>
              Your Swift, Efficient and Reliable Logistics Partner
            </Typography>
            <Box sx={{ width: '100%' }}>
              <Button variant='contained' color='secondary' sx={{py: 2, px: 4, borderRadius: '20px'}}>
                Contact Us
              </Button>
            </Box>
          </Stack>
        </Box>
        {/* <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
          <Stack sx={{color: 'common.white'}}>
            <Typography
              align='center'
              variant='h1'
              gutterBottom
            >
              Logistics For Businesses Of All Types
            </Typography>
            <Typography variant='h6' gutterBottom>
              Your Swift, Efficient and Reliable Logistics Partner
            </Typography>
            <Button>Contact Us</Button>
          </Stack>
        </Box> */}
        {/* <Stack mt={5} spacing={2}>
          <Box className={classes.bigTitleContainer}>
            <Stack spacing={2}>
              <Typography align='center' variant='h1' className={classes.bigTitle} gutterBottom>
                Logistics For Businesses Of All Types
              </Typography>
              <Typography variant='h6' color='common.white' gutterBottom>
                Your Swift, Efficient and Reliable Logistics Partner
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Button>Contact Us</Button>
          </Box>
        </Stack> */}
      </Container>
    </Box>
  );
};

export default Header;
