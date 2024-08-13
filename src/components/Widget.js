import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../redux/actions';

const Widget = ({ widget, categoryId ,widgetId  }) => {
    const dispatch = useDispatch();

    const handleRemoveWidget = () => {
        dispatch(removeWidget(categoryId, widget.id));
    };

    return (
        <div className="widgets">
            <p className="widget-name">{widget.name}</p>
            <p className="widget-text">{widget.text}</p>
            <button className="remove-widget" onClick={() => handleRemoveWidget(categoryId, widgetId)} >X</button>
            {/* <button onClick={handleRemoveWidget}>Remove Widget</button> */}
            {/* <span className="widget-name">{widget.name}</span> */}
                {/* <p className="widget-text">{widget.text}</p> */}
        </div>
    );
};

export default Widget;
