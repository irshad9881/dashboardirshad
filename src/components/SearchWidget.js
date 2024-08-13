import React from 'react';
import { useDispatch } from 'react-redux';
import { searchWidget } from '../redux/actions';

const SearchWidget = () => {
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(searchWidget(e.target.value));
    };

    return (
        <div className='Dashboard'>
            <h3 className='Heading'>Dashboard</h3>
        <input
            className='search'
            type="text"
            placeholder="Search widgets..."
            onChange={handleSearch}
        /></div>
    );
};

export default SearchWidget;
