import { useEffect, useState } from "react";
import sortByInitiative from "../helpers/helpers";

const testData = [
  {
    id: 1,
    name: "Gortis Billabong",
    hp: 32,
    ac: 15,
    initiative: 18,
    selected: false
  },
  {
    id: 2,
    name: "Kappa \"Turbo\" Turtletaub",
    hp: 40,
    ac: 19,
    initiative: 10,
    selected: false
  },
  {
    id: 3,
    name: "S'moop Frog",
    hp: 32,
    ac: 13,
    initiative: 17,
    selected: false
  }
]

const useApplicationData = () => {
  const sortedOrder = sortByInitiative(testData)
  const [state, setState] = useState(sortedOrder);

  const statChange = (event, type, value) => {
    const charId = event.target.dataset.tag;
    const char = state.find(char => char.id == charId)

    // change the stat to the new input value
    char[type.toLowerCase()] = event.target.value;

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
      initiative:20,
      selected: false
    }

    setState(sortByInitiative([...state, newChar]))
  }

  const removeChar = (event) => {
    const charId = Number(event.target.dataset.tag);

    const newState = state.filter(object => {
      return object.id !== charId;
    });

    setState(sortByInitiative(newState));
  }

  const nextChar = () => {
    // get selected char and index
    let selectedIndex = state.findIndex(char => char.selected)
    let selectedChar = {};
    
    // check if any are selected
    if (selectedIndex !== -1) {
      selectedChar = state.find((char, index) => index === selectedIndex);
      selectedChar.selected = false;
    } else { 
      selectedIndex = -1;
    }

    // Check if at end of order
    if (selectedIndex == state.length - 1) {
      selectedIndex = -1;
    }

    let nextUp = state.find((char, index) => index === selectedIndex + 1)
    
    nextUp.selected = true;


    // replace the char obj by finding the id
    const newState = state.map(character => {
      if (character.id == nextUp.id) return nextUp
      if (character.id == selectedChar.id) return selectedChar
      return character
    })
    
    setState(newState)
  }

  const prevChar = () => {
    // get selected char and index
    let selectedIndex = state.findIndex(char => char.selected);
    let selectedChar = {};

    // check if any are selected
    if (selectedIndex !== -1) {
      selectedChar = state.find((char, index) => index === selectedIndex);
      selectedChar.selected = false;
    } else {
      selectedIndex = 1;
    }

    
    // Check if at top of order
    if (selectedIndex == 0) {
      selectedIndex = state.length;
    }

    let nextUp = state.find((char, index) => index === selectedIndex - 1)
    
    nextUp.selected = true;


    // replace the char obj by finding the id
    const newState = state.map(character => {
      if (character.id == nextUp.id) return nextUp
      if (character.id == selectedChar.id) return selectedChar
      return character
    })
    
    setState(newState)
  }

  return { state, statChange, addChar, removeChar, nextChar, prevChar};
} 

export default useApplicationData;