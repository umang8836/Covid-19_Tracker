import React  from 'react';
import {Line} from 'react-chartjs-2';

import styles from './Chart.module.css';

const ChartStat = ({data})=>{

    
    const dataset = data.map((dailydata) =>({
        totalconfirmed : dailydata.totalconfirmed,
        totaldeceased: dailydata.totaldeceased,
        totalrecovered: dailydata.totalrecovered,
        date: dailydata.date
    }))

    console.log("inside chart data",dataset)

    const lineChart = (
        dataset.length ?
        (<Line data={
            {labels: dataset.map(({date}) =>date) , 
            datasets : [{
                data:dataset.map(({totalconfirmed}) =>totalconfirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true
            },
            {
                data:dataset.map(({totaldeceased}) =>totaldeceased),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true
            },
            {
                data:dataset.map(({totalrecovered}) =>totalrecovered),
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

export default ChartStat;