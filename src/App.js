import React from 'react';
import './App.css';
import Search from "./comp/Search";
import SuperSum from "./comp/SuperSum";
import ArrMax from "./comp/ArrMax";


function App() {

    return (
        <div className="App">
            Задачи №1-5:
            <Search/>
            ===================<br/>
            Задача №6:
            <SuperSum/>
            ==================<br/>
            Задачи №7,9:
            <ArrMax/>
        </div>
    );
}

export default App;
