import React, { useState } from 'react'
import Row from '../Row/Row'

import './Board.css'

function Board() {
    
    const [coordinates] = useState(new Array(24).fill(new Array(24).fill(null).map((e,i) => ({id:i+1, peg: false}))))

    console.log(coordinates[0][0])

    // const placePeg = (row, col) => {
    //     coordinates[row][col].peg=true
    // }

    return (
        <div className = 'board'>
            <div className = 'row'>
                {coordinates.map((e,i) => {
                    return <Row 
                        // peg={placePeg()}
                        rowId={i+1}
                        row={e}
                    />
                })}
            </div>
        </div>
    )
}

export default Board