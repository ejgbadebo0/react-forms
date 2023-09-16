import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

const NewBoxForm = ({newBox}) => {
    
    const [formData, setFormData] = useState(
        {
            color: '',
            height: '',
            width: ''
        }
    );
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        newBox({...formData, id: uuid()});
        setFormData(formData => ({
            color: '',
            height: '',
            width: ''
        }))
    }
    return (
        <div> 
            <h1><u>Add New Box:</u></h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='color'>Background Color: </label>
                <input
                 type='text'
                 id='color'
                 placeholder='Background Color'
                 value={formData.color}
                 onChange={handleChange}
                >
                </input>
                <label htmlFor='height'>Height - {formData.height}</label>
                <input
                 type='range'
                 id='height'
                 placeholder='Height'
                 value={formData.height}
                 min='0'
                 max='10'
                 onChange={handleChange}
                >
                </input>
                <label htmlFor='width'>Width - {formData.width}</label>
                <input
                 type='range'
                 id='width'
                 placeholder='Width'
                 value={formData.width}
                 min='0'
                 max='10'
                 onChange={handleChange}
                >
                </input>
            </form>
            <button onSubmit={handleSubmit}>Add Box</button>
        </div>
    )
}

export default NewBoxForm;