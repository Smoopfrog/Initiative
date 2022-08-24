const sortByInitiative = characters => {
  return characters.sort((a, b) => b.initiative - a.initiative)
}

export default sortByInitiative;