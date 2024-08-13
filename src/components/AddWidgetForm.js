import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../redux/actions';

const AddWidgetForm = ({ categoryId }) => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const widget = { id: Date.now(), name, text };
        dispatch(addWidget(categoryId, widget));
        setName('');
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="widgets" >
            <input
                className='name'
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Widget Name"
                required
            />
            <input
                className='text'
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Widget Text"
                required
            />
            
            <button type="submit" className='remove-widget'>+ Add Widget</button>
        </form>
    );
};

export default AddWidgetForm;
