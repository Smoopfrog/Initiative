import './styles/App.scss'
import Character from './components/Character/Character';
import Tracker from './components/Tracker';
import Navbar from './components/Navbar';
import { Grid } from '@mui/material';
import useApplicationData from './hooks/useApplicationData';



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
        statChange = {statChange}
        removeChar={removeChar}
      />
    )
  })

  return (
    <div className="App">
      {/* <Navbar/>
      <Tracker 
        addChar={addChar} 
        nextChar={nextChar} 
        prevChar={prevChar} 
        charArray={state}
      />
      <section className='turn-order'>
        {charArray}
      </section> */}
      <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
    </div>
  );
}

export default App;
