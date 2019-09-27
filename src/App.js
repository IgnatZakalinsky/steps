import React from 'react';
import './App.css';
import Main from "./main/main";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </BrowserRouter>
        </div>
    );
};

export default App;
