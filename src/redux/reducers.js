import { ADD_WIDGET, REMOVE_WIDGET, SEARCH_WIDGET, ADD_CATEGORY, REMOVE_CATEGORY } from './actions';
import dashboardData from '../data/dashboardData';

const initialState = {
    categories: dashboardData.categories,
    searchQuery: '',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WIDGET:
            return {
                ...state,
                categories: state.categories.map(category =>
                    category.id === action.payload.categoryId
                        ? {
                            ...category,
                            widgets: [...category.widgets, action.payload.widget],
                        }
                        : category
                ),
            };
        case REMOVE_WIDGET:
            return {
                ...state,
                categories: state.categories.map(category =>
                    category.id === action.payload.categoryId
                        ? {
                            ...category,
                            widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId),
                        }
                        : category
                ),
            };
        case SEARCH_WIDGET:
            return {
                ...state,
                searchQuery: action.payload,
            };
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload],
            };
        case REMOVE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(category => category.id !== action.payload),
            };
        default:
            return state;
    }
};

export default rootReducer;
