import React  from 'react';
import Display from '../DisplayCases';
import Bar from 'react-chartjs-2';
import SearchCountry from './SearchCountry';
import MostAffectedCountry from './MostAffectedCountry';



const Global = ({ data }) => {

    console.log("inside global data", data)
    if (data.Global) {

        const barChart = (
            <Bar 
                data={{
                    labels:['Infected','Recovered','Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor:[
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)'
                        ],
                        data:[data.Global.TotalConfirmed,data.Global.TotalRecovered, data.Global.TotalDeaths]
                    }]
                }}

                options={{
                     legend:{ display: true},
                     title: {display:true , text:'Global Cases'}
                }}
            />
        )


        return (
            <div>
                <div className='row'>
                    <div className='lesson-container col-md-6'>

                        <h3>Global Cases</h3>
        <p>(Last Updated On: {data.Date.slice(0,10)} {data.Date.slice(11,19)})</p>

                        <div className="row">
                            {Object.entries(data.Global).map(item => (
                                <Display key={item[0]} name={item[0]} color="whitesmoke" number={item[1]} />

                            ))}
                        </div>

                    </div>

                    <div className='col-md-6'>
                        {barChart}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <SearchCountry allData={data} />
                    </div>
                    <div className="col-md-6">
                        <MostAffectedCountry  allData={data} />
                    </div>
                </div>
            </div>
        )
    }
    else return (
        <div>
        <h3>Loading...</h3>
        <p>Please Refresh the page...</p>
    </div>)
}

export default Global;