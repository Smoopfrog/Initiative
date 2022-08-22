import './styles/App.scss'
import Character from './components/Character/Character';
import Tracker from './components/Tracker';
import { useState } from 'react';

function App() {
  const [order, setOrder] = useState({
    characters: []
  });

  return (
    <div className="App">
      <Tracker />
      <section className='turnOrder'>
        <Character />
        <Character />
        <Character />
      </section>
    </div>
  );
}

export default App;
