import React from 'react'

const Display = ({ title, points, selected, text, bestAnecdote }) => {
  return(
    <div>
      <h1>{title}</h1>
      <h2>{text}</h2>
      <h3>{points[selected]} votes</h3>
    </div>
  )
}

export default Display