import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function GameSeriesPage() {
    const [gameSeries, setgameSeries] = useState([]);


    useEffect(() => {
        axios.get('https://www.amiiboapi.com/api/gameseries/').then(res => {
            const filteredGameSeries = uniqueArray(res.data.amiibo, 'name');
            setgameSeries(filteredGameSeries)
        }
        )
    }, []);
    return (
        <div>
            <h2>Game Series</h2>
            {gameSeries.map((item, index) =>
                <div key={index}>
                    <h4>{item.name}</h4>
                </div>
            )}
        </div>
    )
}

const uniqueArray = (array, key) => {
    return array.filter((item, index, self) =>
        index === self.findIndex((t) =>
            t[key] === item[key]
        ))
};

// const uniqueArray = (array) => {
//     const arr = array.map(item => item.name);
//     return arr.filter((current, index)=> arr.indexOf(current)=== index);
// }