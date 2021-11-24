import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Stack,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
} from '@mui/material';
import { withStyles, useTheme } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import ElevateOnScroll from './ElevateOnScroll';
import bigTitleImage from '../../assets/w1.jpg';

const styles = {
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
};

const Header = props => {
  const { classes } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.root}>
      <ElevateOnScroll {...props}>
        <AppBar>
          <Container>
            <Toolbar>
              <Typography
                variant='h6'
                component='div'
                sx={{ flexGrow: 1, color: 'common.white' }}
              >
                NIJOEPAMS
              </Typography>
              {isMobile ? (
                <>
                  <IconButton
                    edge='start'
                    aria-label='menu'
                    sx={{ color: theme.palette.primary.contrastText, mr: 2 }}
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id='menu-appbar'
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    keepMounted
                    transformOrigin={{vertical: 'top', horizontal: 'right'}}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <Typography variant='h6'>Home</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <MiscellaneousServicesIcon />
                      </ListItemIcon>
                      <Typography variant='h6'>Services</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <PhoneIcon />
                      </ListItemIcon>
                      <Typography variant='h6'>Contact</Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <div>
                  <Button href='#' sx={{ color: 'common.white' }}>
                    Home
                  </Button>
                  <Button href='#' sx={{ color: 'common.white' }}>
                    Services
                  </Button>
                  <Button href='#' sx={{ color: 'common.white' }}>
                    Contact
                  </Button>
                </div>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </ElevateOnScroll>
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
              <Button
                variant='contained'
                color='secondary'
                sx={{ py: 2, px: 4, borderRadius: '20px' }}
              >
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

export default withStyles(styles)(Header);
