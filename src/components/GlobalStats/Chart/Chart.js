import React , {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

import styles from './Chart.module.css';

const Chart = ({countryName})=>{
    const [dailyData, setDailyData] = useState([]);
    //const [cName, setCountryName] = useState('')


    useEffect(() => {
        console.log('effect')
        /*
        function updateCountryName(Name){
            setCountryName(Name);
        }

        updateCountryName(countryName) */
        axios
            .get(`https://api.covid19api.com/total/country/${countryName}`)
            .then(response => {
                console.log('promise fulfilled')
                const modifiedData = response.data.map((dailydata) =>({
                    Confirmed : dailydata.Confirmed,
                    Deaths: dailydata.Deaths,
                    Recovered: dailydata.Recovered,
                    Date: dailydata.Date
                }))
                console.log('modifiedData',modifiedData)

                setDailyData(modifiedData)
            })
            .catch((err) => console.log(err.message));

    },[countryName]
    )

    const lineChart = (
        dailyData.length ?
        (<Line data={
            {labels: dailyData.map(({Date}) =>Date.slice(0,10)) , 
            datasets : [{
                data:dailyData.map(({Confirmed}) =>Confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true
            },
            {
                data:dailyData.map(({Deaths}) =>Deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true
            },
            {
                data:dailyData.map(({Recovered}) =>Recovered),
                label: 'Recovered',
                borderColor: 'green',
                fill: true
            }
                 ]
        }}
             />) :null
    );

    return(
        <div className={styles.container}>
        {lineChart}
        </div>
    )

}

export default Chart;