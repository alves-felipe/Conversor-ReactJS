import React, {useState} from 'react';
import api from '../api/convertAPI';

import './style.css';

const Conversor = (coin) => {
    const [brCoin, setBrCoin] = useState("");
    const [foreignCoin, setForeingCoin] = useState("");

    const handleChange = (event) => {
        setBrCoin(event.target.value);
    }

    const { coinA, coinB } = coin;

    const convertTo = async () => {
        if(brCoin !== ""){
            const apiResponse = ((await api(coinA, coinB)) * parseFloat(brCoin)).toFixed(2);

            setForeingCoin(apiResponse);
        }
    }

    return (
        <article className="all-box">
            <div>
            <h2>Convert: {coinA} to {coinB}</h2>
            <input type="number" onChange={handleChange}></input>
            <button className="bConvert" onClick={convertTo}>Convert</button>
            <p><strong>result:</strong> {foreignCoin}</p>
            </div>
        </article>
    )

}



export default Conversor;