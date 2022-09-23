import './styles/App.scss'
import Character from './components/Character/Character';
import Tracker from './components/Tracker';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import useApplicationData from './hooks/useApplicationData';
import background from './images/orcus.jpeg';
import { Box } from '@mui/material';
import { useState } from 'react';

function App() {
  const { state, statChange, addChar, removeChar, nextChar, prevChar } = useApplicationData()
  const [homepage, setHomepage] = useState('signup');

  const charArray = state.map(character => {
    return (
      <Character
        key={character.id}
        id={character.id}
        name={character.name}
        hp={character.hp}
        ac={character.ac}
        initiative={character.initiative}
        selected={character.selected}
        statChange={statChange}
        removeChar={removeChar}
      />
    )
  })

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
      {homepage === 'login' && <Login setHomepage={setHomepage}/>}
      {homepage === 'signup' && <Signup setHomepage={setHomepage}/>}
    </Box>
  );
}

export default App;
