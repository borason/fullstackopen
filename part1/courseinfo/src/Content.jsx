import React from 'react'
import Part from './Part'

const Content = (props) => {
  console.log(props)
    return (
      <div>
        {props.parts.map(part => <Part part={part} />)}
      </div>
    )
}

export default Content