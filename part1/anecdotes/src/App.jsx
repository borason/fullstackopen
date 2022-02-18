import React, { useState } from 'react'
import Button from './Button'
import Display from './Display'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [ selected, setSelected ] = useState(0)
  const [ points, setPoints ] = useState(new Array(anecdotes.length).fill(0))
  const [ bestAnecdote, setBestAnectdote] = useState(0)

  const getRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const vote = () => {
    let newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
    const max = Math.max(...points)
    setBestAnectdote(points.indexOf(max))
  }

  

  return(
    <div>
      <Display
        title='Anecdote of the Day'
        selected={selected}
        points={points}
        text={anecdotes[selected]}
      />
      <Button 
        onClick={vote}
        text='Vote'
      />
      <Button 
        onClick={getRandomAnecdote}
        text='Next Anectdote'
      />
      <Display
        title='Highest Voted Anecdote'
        selected={bestAnecdote}
        points={points}
        text={anecdotes[bestAnecdote]}
      />
    </div>  
  )
}

export default App