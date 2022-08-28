import './styles/App.scss'
import Character from './components/Character/Character';
import Tracker from './components/Tracker';
import useApplicationData from './hooks/useApplicationData';



function App() {
  const { state, statChange, addChar, removeChar} = useApplicationData()

  const charArray = state.map(character => {
    return (
      <Character
        key={character.id}
        id={character.id}
        name={character.name}
        hp={character.hp}
        ac={character.ac}
        initiative={character.initiative}
        statChange = {statChange}
        removeChar={removeChar}
      />
    )
  })

  return (
    <div className="App">
      <Tracker addChar={addChar} />
      <section className='turnOrder'>
        {charArray}
      </section>
    </div>
  );
}

export default App;
