import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Header} from "./components/header/Header";
import {Routes} from "./components/routes/Routes";

function App() {
    return (<HashRouter>
            <div className="App">
                <Header/>
                <Routes/>
            </div>
        </HashRouter>
    );
}

export default App;
