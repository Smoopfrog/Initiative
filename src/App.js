import './styles/App.scss'
import Character from './components/Character/Character';
import Tracker from './components/Tracker';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Menu from './components/Menu/Menu';
import useApplicationData from './hooks/useApplicationData';
import background from './images/orcus.jpeg';
import { Box } from '@mui/material';
import { useState } from 'react';
const axios = require('axios').default;

axios.defaults.baseURL = 'http://localhost:7001';

function App() {
  const [homepage, setHomepage] = useState('signin');

  return (
    <Box sx={{ display: 'flex', justifyContent: 'row', height: '100vh' }} >
      <Box
        
        sx={{
          height: '100vh',
          width: { xs: '0vw', md: '60vw' },
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {homepage === 'signin' && <Login setHomepage={setHomepage}/>}
      {homepage === 'signup' && <Signup setHomepage={setHomepage}/>}
      {homepage === 'signedIn' && <Menu setHomepage={setHomepage}/>}
    </Box>
  );
}

export default App;
