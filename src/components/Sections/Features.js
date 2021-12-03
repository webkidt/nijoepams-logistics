import { Box, Container, Grid, Link, Paper, Stack, Typography } from '@mui/material';
import expressImage from '../../assets/u1.png';
import supportImage from '../../assets/u2.png';
import standardImage from '../../assets/u3.png';

const featureItem = (
  img = standardImage,
  alt = 'alt text',
  title = 'Standard Courier',
  description = 'hello'
) => {
  return (
    <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
      <Paper elevation={0} sx={{ pt: 9, pb: 5, m: '0 auto', maxWidth: '360px' }}>
        <Stack>
          <Link underline='none'>
            <Stack>
              <Box
                component='img'
                src={img}
                alt={alt}
                sx={{ height: { md: '180px' } }}
              ></Box>
              <Typography variant='feature' color='black'>
                {title}
              </Typography>
            </Stack>
          </Link>
          <Typography sx={{ px: 3 }}>{description}</Typography>
        </Stack>
      </Paper>
    </Grid>
  );
};

const Features = props => {
  return (
    <Box sx={{ pt: 10, pb: 5 }}>
      <Container sx={{ px: 2 }} fixed>
        <Box sx={{ textAlign: 'center' }}>
          <Grid container spacing={1}>
            <Grid
              item
              xs={8}
              justifyContent='center'
              alignItems='center'
              sx={{ mx: 'auto' }}
            >
              <Typography variant='featureTitle'>What We Can Do For You</Typography>
            </Grid>
            <Grid
              item
              xs={8}
              justifyContent='center'
              alignItems='center'
              sx={{ mx: 'auto' }}
            >
              <Typography
                variant='description'
                color='subGrey'
                sx={{ fontSize: { xs: '18px', sm: '18px', md: '1.25rem' } }}
              >
                With our swift and efficient courier network, we provide top notch
                services for our clients. Want to know which of our services clients use
                the most? Here is our most popular opinion.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={0}>
            {featureItem(
              standardImage,
              'standard courier image',
              'Standard Courier',
              'This service involves transferring the parcel to the closes depot to the delivery location.'
            )}
            {featureItem(
              expressImage,
              'express courier image',
              'Express Courier',
              'This service is best for people who have urgent deliveries that need to arrive on the same day.'
            )}
            {featureItem(
              supportImage,
              'support image',
              'Support',
              'We have trained representatives that will help you all the way in whatever service you need.'
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
