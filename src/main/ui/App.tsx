import React, {useEffect} from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Header} from "./components/header/Header";
import {Routes} from "./components/routes/Routes";
import {useDispatch} from "react-redux";
import {actionsAuthorization, meTC} from "../bll/authorization-reducer";

const App:React.FC = () => {
    const dispatch = useDispatch ()
    useEffect(()=>{
        dispatch(meTC())
    },[])

    return (<HashRouter>
            <div className="App">
                <Header/>
                <Routes/>
            </div>
        </HashRouter>
    );
};

export default App;
