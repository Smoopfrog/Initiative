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
  {
    id: 4,
    name: "Frightened",
    icon: <i class="fa-solid fa-ghost"></i>,
    description: ['A frightened creature has disadvantage on Ability Checks and Attack rolls while the source of its fear is within Line of Sight.', 'The creature can’t willingly move closer to the source of its fear.']
  },
  {
    id: 5, 
    name: "Grappled",
    icon: <i class="fa-solid fa-handshake-simple"></i>,
    description: ['A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.', 'The condition ends if the Grappler is incapacitated (see the condition).', 'The condition also ends if an Effect removes the grappled creature from the reach of the Grappler or Grappling Effect, such as when a creature is hurled away by the Thunderwave spell.']
  },
  {
    id: 6,
    name: "Incapacitated",
    icon: <i class="fa-solid fa-face-spiral-eyes"></i>,
    description: ['An incapacitated creature can’t take Actions or Reactions.']
  }
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