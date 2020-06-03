import React, {useEffect} from 'react';
import './App.css';


const App = ({state, getList}) => {
    useEffect(() => {
        getList();
    },[state]);
    return (
        <div className="app">
            <li className={'list'}>
                {Object.keys(state.rates).map(item => {
                        return <li className={'list-item'}>
                            <div className={'item-nameRate'}>{item}</div>
                            <div className={'item-valueRate'}> {state.rates[item]}</div>
                        </li>
                    }
                )}
            </li>
        </div>
    )
}


export default App;
