import React from "react";
import Condition from "./Condition";

const conditionsData = [
  {
    id: 1,
    name: "Blinded",
    icon: <i class="fa-solid fa-eye-slash"></i>,
    description: [`A blinded creature can’t see and automatically fails any ability check that requires sight.`, `Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage.`]
  }, 
  {
    id: 2,
    name: "Charmed",
    icon: <i class="fa-solid fa-heart"></i>,
    description: [`A charmed creature can’t Attack the charmer or target the charmer with harmful Abilities or magical Effects.`, `The charmer has advantage on any ability check to interact socially with the creature.`]
  }, 
  {
    id: 3,
    name: "Deafened",
    icon: <i class="fa-solid fa-ear-deaf"></i>,
    description: [`A deafened creature can’t hear and automatically fails any ability check that requires hearing.`]
  }, 
];

const Conditions = props => {

  const conditions = conditionsData.map(condition => {
    return (
      <Condition 
        key = {condition.id}
        name = {condition.name}
        icon = {condition.icon}
        description = {condition.description}
      />
    )
  })

  return (
    <div className="Conditions">
      <h3>Conditions</h3>
      <div>
        {conditions}
      </div>
    </div>
  )
}

export default Conditions;