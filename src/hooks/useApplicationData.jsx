import { useState } from "react";
import sortByInitiative from "../helpers/helpers";

const testData = [
  {
    id: 1,
    name: "Bobert Bobington",
    hp: 50,
    ac: 20,
    initiative: 15
  },
  {
    id: 2,
    name: "Okay Buddy",
    hp: 1,
    ac: 43,
    initiative: 1
  },
  {
    id: 3,
    name: "Trong'lor",
    hp: 32,
    ac: 13,
    initiative: 12
  }
]

const useApplicationData = () => {
  const sortedOrder = sortByInitiative(testData)

  const [state, setState] = useState(sortedOrder);

  const statChange = (event, type, value) => {
    const charId = event.target.dataset.tag;
    const char = state.find(char => char.id == charId)

    // change the stat to the new input value
    char[type.toLowerCase()] = Number(event.target.value);

    if (value) {
      char[type.toLowerCase()] = Number(value);
    }

    // replace the char obj by finding the id
    const newState = state.map(character => {
      if (character.id == char.id) return char
      return character
    })

    setState(sortByInitiative(newState))
  }
  
  const addChar = () => {
    let charId = Math.floor(Math.random() * 1000) + 1;

    let newChar = {
      id: charId,
      name: "Character",
      hp: 20,
      ac: 20,
      initiative:20
    }

    setState(sortByInitiative([...state, newChar]))
  }

  const removeChar = (event) => {
    const charId = Number(event.target.dataset.tag);

    const newState = state.filter(object => {
      console.log('object.id', object.id)
      console.log('charId', charId)

      return object.id !== charId;
    });

    console.log('newState', newState)
    setState(sortByInitiative(newState))
  }

  return { state, statChange, addChar, removeChar };
} 

export default useApplicationData;