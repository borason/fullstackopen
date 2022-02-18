import React from 'react'

const Part = (props) => {
  // console.log(props);
  return (
    <div>
      <h1>{props.part.name}</h1>
      <h2>Exercises: {props.part.exercises}</h2>
    </div>
  )
}

export default Part