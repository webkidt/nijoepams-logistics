import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
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

const StyledTextField = styled(TextField)(({ theme }) => ({
  paddingBottom: theme.spacing(),
  '& .MuiInput-root:before': {
    borderColor: theme.palette.inputGrey,
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.labelGrey,
  },
  '& .MuiTextField-root': {
    fontSize: '14px',
  },
}));

const ContactUs = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = e => {
    setSubject(e.target.value);
  };

  const handleMessageChange = e => {
    setMessage(e.target.value);
  };

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
      <Container
        sx={{
          maxWidth: { xs: '100%', sm: '100%', md: '750px', lg: '100%' },
          width: { lg: '970px', xl: '1170px' },
          px: { sm: 2, md: 2, lg: 2 },
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Grid container justifyContent='space-between'>
          <Grid
            item
            xs={12}
            lg={4.7}
            sx={{ position: 'relative', minHeight: '1px', px: 2 }}
          >
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
          <Grid
            item
            xs={12}
            lg={4.7}
            px={1}
            sx={{ pt: { xs: '5px', sm: '20px', lg: '0' }, position: 'relative' }}
          >
            <Card
              raised
              sx={{
                display: 'inline-block',
                maxWidth: '100%',
                width: '100%',
                my: 4,
                // pt: 2,
                overflow: 'visible',
                borderRadius: 2,
              }}
            >
              <CardHeader
                sx={{
                  textAlign: 'center',
                  bgcolor: 'secondary.main',
                  px: 1,
                  py: 2,
                  mb: 2,
                  mx: 2,
                  mt: -3,
                  borderRadius: 1,
                  boxShadow: 10,
                }}
                title={
                  <Typography
                    component='h4'
                    color='white'
                    variant='contactTitle'
                    sx={{ fontSize: '19px', my: 1 }}
                  >
                    Contact Us
                  </Typography>
                }
              />
              <CardContent
                sx={{
                  '&:last-child': { pb: 0, pt: 3, px: 3 },
                }}
              >
                <Box
                  sx={{
                    mx: 'auto',
                    width: 'auto',
                    height: 'auto',
                    marginTop: 0,
                    marginBottom: 3,
                    padding: 0,
                    background: 'none',
                    float: 'none',
                    position: 'static',
                    listStyle: 'none',
                    visibility: 'visible',
                    overflow: 'visible',
                  }}
                >
                  <Box
                    component='form'
                    sx={{
                      pb: 3,
                      mx: 2,
                      display: 'block',
                      position: 'relative',
                      '& .MuiTextField-root': {
                        m: 1,
                      },
                    }}
                  >
                    <Box component='div' sx={{}}>
                      <Grid container>
                        <Grid item xs={6}>
                          <StyledTextField
                            id='standard-first-name'
                            label='First Name'
                            variant='standard'
                            size='small'
                            value={name}
                            onChange={handleNameChange}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <StyledTextField
                            id='standard-email'
                            label='Email'
                            type='email'
                            variant='standard'
                            size='small'
                            value={email}
                            onChange={handleEmailChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <StyledTextField
                            fullWidth
                            id='standard-subject'
                            label='Subject'
                            variant='standard'
                            size='small'
                            value={subject}
                            onChange={handleSubjectChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <StyledTextField
                            multiline
                            rows={4}
                            fullWidth
                            id='standard-your-message'
                            label='Your Message'
                            variant='standard'
                            value={message}
                            onChange={handleMessageChange}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                    <Box component='div' sx={{ mt: 1, textAlign: 'right' }}>
                      <Button
                        variant='contained'
                        size='large'
                        color='secondary'
                        sx={{ borderRadius: '20px', py: 2, px: 4 }}
                      >
                        Send Message
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
