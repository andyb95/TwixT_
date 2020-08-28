import React from 'react'
import './Coordinate.css'

function Coordinate (props){
  console.log(props)
  
  // const placePeg = () => {
  //  props.space.peg=true
  // }

  return (
    <button
      className={props.space.peg ? 'marked' : 'unmarked'}
      // onClick={props.peg(props.rowId, props.colId)}
    >
      0
    </button>
  )
}

export default Coordinate
