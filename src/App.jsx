import React from 'react';
import Giphy from "./components/Giphy"
import Search from "./components/Search"
import {useState} from 'react';
import "./components/App.css";


const App = () => {
    const [text,setText] = useState([])
    return <div><Search setText={setText}/><Giphy text={text}/></div>
};

export default App;