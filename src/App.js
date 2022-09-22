import './styles/App.scss'
import Character from './components/Character/Character';
import Tracker from './components/Tracker';
import Navbar from './components/Navbar';
import background from './images/dnd3.jpg';
import chest from './images/treasure.png'
import useApplicationData from './hooks/useApplicationData';
import { Box, Container, height, Stack, TextField, Typography, FormControlLabel } from '@mui/material';
import { CheckBox } from '@mui/icons-material';



function App() {
  const { state, statChange, addChar, removeChar, nextChar, prevChar } = useApplicationData()

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
        item


        sx={{
          height: '100vh',
          width: { xs: '0vw', md: '60vw' },
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Box
        sx={{
          height: '100vh',
          width: { xs: '100vw', md: '40vw' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '20px'
        }}
      >
        <img src={chest} width="50" height="50" />
        <Typography>
          Sign in
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
        />
        <FormControlLabel control={<CheckBox defaultChecked />} label="Remember me" />
      </Box>
    </Box>
  );
}

export default App;
