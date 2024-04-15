import { Box, Button } from '@mui/material';
import SheepImage from '@src/assets/images/funny-sheep.png';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: 1,
        width: 1,
        p: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem'
      }}
    >
      <Button variant="contained" size="large" onClick={() => navigate('/game')}>
        ברוך הבא לכבשים!
      </Button>
      <Box component="img" src={SheepImage} sx={{ width: 0.9 }} />
    </Box>
  );
};

export default HomePage;
