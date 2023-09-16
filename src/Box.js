import React from 'react';


const Box = ({color, height, width, id, handleRemove}) => {
    const removeBox = handleRemove(id);
    return (
        <div>
            <div style={
                {height:`${height}em`, width: `${width}em`, backgroundColor: `${color}`}
            }>
                <button onClick={removeBox}>X</button>
            </div>
        </div>
    )
}

export default Box;