import React from 'react'

const PersonCard = props => {
  return (
    <div>
        <h1>{props.lastName}, {props.firstName}</h1>
        <h6>Age: {props.age}</h6>
        <h6>Hair Color: {props.hairColor}</h6>
    </div>
  )
}

export default PersonCard