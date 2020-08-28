import React from 'react'
import Coordinate from '../Coordinate/Coordinate'

function Row (props) {

  return (
    <div>
      {props.row.map((e) => {
        return <Coordinate
          // peg={props.peg()}
          rowId={props.rowId}
          colId={e.id}
          space={e}
        />
      })}
    </div>
  )
}

export default (Row)