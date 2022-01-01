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
import { useTheme } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import { styled } from '@mui/system';
import ElevateOnScroll from './ElevateOnScroll';
import bigTitleImage from '../../assets/a9.jpg';
import logo from '../../assets/icon3.png';

const HeaderWrapper = styled(Box)({
  minHeight: '100vh',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url(${bigTitleImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
});

const Header = props => {
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
    <HeaderWrapper>
      <ElevateOnScroll {...props}>
        <AppBar>
          <Container>
            <Toolbar>
              <Box component='img' alt='logo' src={logo} mr={1}></Box>
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
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
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
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
