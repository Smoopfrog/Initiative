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

  const statChange = (event, type) => {
    console.log(type)
    const charId = event.target.dataset.tag;
    const char = state.find(char => char.id == charId)

    char[type.toLowerCase()] = Number(event.target.value);
    console.log(char)
    const newState = state.map(character => {
      if (character.id == char.id) return char
      return character
    })
    setState(sortByInitiative(newState))
  }
  
  return { state, statChange };
}

export default useApplicationData;