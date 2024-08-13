export const ADD_WIDGET = 'ADD_WIDGET';
export const REMOVE_WIDGET = 'REMOVE_WIDGET';
export const SEARCH_WIDGET = 'SEARCH_WIDGET';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';

export const addWidget = (categoryId, widget) => ({
    type: ADD_WIDGET,
    payload: { categoryId, widget },
});

export const removeWidget = (categoryId, widgetId) => ({
    type: REMOVE_WIDGET,
    payload: { categoryId, widgetId },
});

export const searchWidget = (query) => ({
    type: SEARCH_WIDGET,
    payload: query,
});

export const addCategory = (category) => ({
    type: ADD_CATEGORY,
    payload: category,
});

export const removeCategory = (categoryId) => ({
    type: REMOVE_CATEGORY,
    payload: categoryId,
});
