import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CustomList = styled('li')({ display: 'inline-block' });
const FooterLink = styled(Link)(({ theme }) => ({
  opacity: 0.86,
  color: '#ffffff',
  padding: theme.spacing(2),
  fontSize: '12px',
  fontWeight: 500,
  display: 'inline-block',
  position: 'relative',
  borderRadius: '3px',
  textTransform: 'uppercase',
  textDecoration: 'none',
}));

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#323437',
        color: '#999999',
        textAlign: 'center',
        pt: '30px',
        pb: '18px',
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} lg={8}>
            <Box component='ul' sx={{ my: 0, p: 0, listStyle: 'none' }}>
              <CustomList>
                <FooterLink>Home</FooterLink>
              </CustomList>
              <CustomList>
                <FooterLink>Services</FooterLink>
              </CustomList>
              <CustomList>
                <FooterLink>Contact</FooterLink>
              </CustomList>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box py={2} mt={-1} sx={{color: '#fff'}}>
              <Typography variant='footer'>Developed By Webkidt</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
