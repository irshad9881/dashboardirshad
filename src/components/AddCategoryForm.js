import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../redux/actions';

const AddCategoryForm = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const category = { id: Date.now(), name, widgets: [] };
        dispatch(addCategory(category));
        setName('');
    };

    return (
        <form onSubmit={handleSubmit} className='addcatagory'>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Category Name"
                required
            />
            <button type="submit" className='add-catagory'>+ Add Category</button>
        </form>
    );
};

export default AddCategoryForm;
