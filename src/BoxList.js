import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';


const BoxList = () => {

    const [boxList, setBoxList] = useState(
        []
    )
    const addBox = box => {
        setBoxList(boxList => [...boxList, box])
    };

    const removeBox = id => {
        setBoxList(boxList => boxList.filter(box => box.id !== id));
    };

    return (
        <div>
            <NewBoxForm newBox={addBox}/>
            {boxList.map(box => (
                <Box 
                    color={box.color}
                    height={box.height}
                    width={box.width}
                    id={box.id}
                    key={box.id}
                    handleRemove={removeBox}
                />
            ))}
        </div>
    )
}

export default BoxList; 