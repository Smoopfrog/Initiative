import './styles/App.scss'
import Character from './components/Character/Character';
import Tracker from './components/Tracker';
import useApplicationData from './hooks/useApplicationData';



function App() {
  const { state, statChange } = useApplicationData()

  const charArray = state.map(character => {
    return (
      <Character
        key={character.id}
        id={character.id}
        name={character.name}
        hp={character.hp}
        ac={character.ac}
        initiative={character.initiative}
        onChange = {statChange}
      />
    )
  })

  return (
    <div className="App">
      <Tracker />
      <section className='turnOrder'>
        {charArray}
      </section>
    </div>
  );
}

export default App;
