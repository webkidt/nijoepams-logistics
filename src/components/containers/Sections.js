import { Box } from '@mui/material';
import Features from '../Sections/Features';
import ContactUs from '../Sections/ContactUs';
import Footer from '../Sections/Footer';

const Sections = props => {
  return (
    <Box
      sx={{
        mx: { xs: 0, sm: 2 },
        mt: { xs: 0, sm: -6 },
        borderRadius: { xs: 0, sm: '6px 6px 0 0' },
        backgroundColor: '#fff',
      }}
    >
      <Features />
      <ContactUs />
      <Footer />
    </Box>
  );
};

export default Sections;
