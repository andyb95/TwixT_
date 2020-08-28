import React from 'react'
import Coordinate from '../Coordinate/Coordinate'

function Row (props) {
  console.log(props)

  return (
    <div>
      {props.row.map((e) => {
        return <Coordinate
          id={props.row.id}
          space={e}
        />
      })}
    </div>
  )
}

export default (Row)