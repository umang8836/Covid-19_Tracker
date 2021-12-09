import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Allstates from './AllStates';
import Display from '../DisplayCases';
import Chart from './Chart/Chart';
import SearchDistrict from './SearchDistrict';



const IndianStats = () => {

    const [indianData, setIndiaData] = useState([])
   
    useEffect(() => {
        console.log('effect')
        axios
            .get('https://api.covid19india.org/data.json')
            .then(response => {
                console.log('promise fulfilled')
                console.log('allIndianData',response.data)
                setIndiaData(response.data)
            })
            .catch((err) => console.log(err.message));

    }, []
    )

    if (indianData.statewise) {
        return (

            <div>

                <h3>COVID-19 India Status</h3>
                <p>[Last Updated On: {indianData.statewise[0].lastupdatedtime}]</p>
                <div className="row">
                    <Display name="Total Confirmed" number={Number(indianData.statewise[0].confirmed)} color="info" font="white" />
                    <Display name="Total Active" number={Number(indianData.statewise[0].active)} color="warning" font="white"  />
                    <Display name="Total Recovered" number={Number(indianData.statewise[0].recovered)} color="success" font="white"  />
                    <Display name="Total Deaths" number={Number(indianData.statewise[0].deaths)} color="danger" font="white"  />
                </div>

                <Chart data={indianData.cases_time_series} />
                <br /> <br/>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Search State/District-wise Status</h3> 
                        <SearchDistrict />
                    </div>
                    
                    <div className="col-md-6">
                        <h3> Statewise Status</h3>
                        <Allstates data={indianData.statewise} />
                    </div>

                    
                </div>
            </div>
        )
    }
    else {
        return <h3>Loading...</h3>
    }
    

} 

export default IndianStats;