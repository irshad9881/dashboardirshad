import React from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';
import AddCategoryForm from './AddCategoryForm';

const Dashboard = () => {
    const categories = useSelector(state => state.categories);
    const searchQuery = useSelector(state => state.searchQuery);

    const filteredCategories = categories.map(category => ({
        ...category,
        widgets: category.widgets.filter(widget =>
            widget.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
    }));

    return (
        <div className="dashboard">
            
            <AddCategoryForm className="addcatagory"/>
            {filteredCategories.map(category => (
                <Category key={category.id} category={category} className="category" />
            ))}
        </div>
    );
};

export default Dashboard;
