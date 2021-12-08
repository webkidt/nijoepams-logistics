import { Box, Container, Grid, Typography } from '@mui/material';
import AddLocation from '@mui/icons-material/AddLocation';
import PhoneIcon from '@mui/icons-material/Phone';
import BackgroundImage from '../../assets/w3.jpg';

const phoneInfo = (
  <Typography color='lighterGrey' sx={{ fontSize: { xs: '14px', sm: '16px' }, mb: 1 }}>
    Mary Pam
    <br />
    +2348142493804
    <br />
    Mon - Fri, 8:00-17:00
  </Typography>
);

const locationInfo = (
  <Typography color='lighterGrey' sx={{ fontSize: { xs: '14px', sm: '16px' }, mb: 1 }}>
    No 44 Ndagi Faruk Tafawa Balewa Street, Jos, Plateau State
  </Typography>
);

const ContactInfo = ({ icon, title, info }) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', maxWidth: '360px', mt: 3 }}>
        <Box color='white' sx={{ mt: '14px', mr: '10px' }}>
          {icon}
        </Box>
        <Box sx={{ overflow: 'hidden' }}>
          <Typography
            component='h2'
            variant='featureTitle'
            color='white'
            sx={{ fontSize: { xs: '18px', sm: '28px' }, mb: 1 }}
          >
            {title}
          </Typography>
          {info}
        </Box>
      </Box>
    </Box>
  );
};

const ContactUs = () => {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url(${BackgroundImage})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        pt: 11,
        pb: 9,
      }}
    >
      <Container fixed sx={{ px: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Typography color='white' component='p' variant='featureTitle' sx={{ my: 2 }}>
              Get in Touch
            </Typography>
            <Typography color='lighterGrey' sx={{ mt: 1, mb: 2 }}>
              Always available for our Customers
            </Typography>
            <ContactInfo
              icon={<AddLocation fontSize='large' />}
              title='Find us at the office'
              info={locationInfo}
            />
            <ContactInfo
              icon={<PhoneIcon fontSize='large' />}
              title='Give us a ring'
              info={phoneInfo}
            />
          </Grid>
          <Grid item xs={12} md={5}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
