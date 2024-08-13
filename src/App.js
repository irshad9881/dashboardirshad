import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/Dashboard';
import SearchWidget from './components/SearchWidget';

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <SearchWidget />
                <Dashboard />
            </div>
        </Provider>
    );
};

export default App;
