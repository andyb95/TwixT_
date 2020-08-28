import React, { useState } from 'react'
import Row from '../Row/Row'

import './Board.css'

function Board() {
    
    const [coordinates] = useState(new Array(24).fill(new Array(24).fill(null).map((e,i) => ({id:i+1, peg: false}))))

    console.log(coordinates)

    // const placePeg = setCoordinates(coordinates[0][0])

    return (
        <div className = 'board'>
            {/* <div className = 'row'>
                {coordinates.map((e,i) => {
                    return <Row 
                        id={i}
                        row={e}
                    />
                })}
            </div> */}
        </div>
    )
}

export default Board