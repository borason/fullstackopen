import React from 'react'

const Note = ({ note }) => {
  return(
    <li key={note.key}>{note.content}</li>
  )
}

export default Note