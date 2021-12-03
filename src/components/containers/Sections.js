import { Paper } from '@mui/material';
import Features from '../Sections/Features';

const Sections = props => {
  return (
    <Paper
      elevation={3}
      sx={{
        mx: { xs: 0, sm: 2 },
        mt: { xs: 0, sm: -6 },
        borderRadius: { xs: 0, sm: '6px 6px 0 0' },
        backgroundColor: '#fff',
      }}
    >
      <Features />
    </Paper>
  );
};

export default Sections;
