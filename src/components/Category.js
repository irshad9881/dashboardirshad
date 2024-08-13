import React from 'react';
import { useDispatch } from 'react-redux';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';
import { removeCategory } from '../redux/actions';

const Category = ({ category }) => {
    const dispatch = useDispatch();

    const handleRemoveCategory = () => {
        dispatch(removeCategory(category.id));
    };

    return (
          <div className=''> 
          <div className='removeCatagory'>
          <p className='catagoryname'>{category.name}</p>
          <button onClick={handleRemoveCategory} className='remove-catagory'>X Remove Catagory</button>
          </div>
          <div className='Catagory'>
            {category.widgets.map(widget => (
                <Widget key={widget.id} widget={widget} categoryId={category.id} />
            ))}
            <AddWidgetForm categoryId={category.id} />
        </div></div>
    );
};

export default Category;
