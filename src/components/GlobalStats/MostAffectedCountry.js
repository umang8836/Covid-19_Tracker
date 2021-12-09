import React  from 'react';
import { Table } from 'reactstrap';


const MostAffectedCountry = ({allData}) => {
    if (allData.Countries) {
        let listedCountry = allData.Countries.sort(function (a, b) { return b.TotalConfirmed - a.TotalConfirmed }).slice(0, 10);
        console.log('sorted Country', listedCountry)

        return(
            <div>
                <br /> <br/>

            <h3>List of 10 Most Affected Countries</h3>

            <Table responsive dark>
                <thead>
                <tr key="heading">
                    <th style={{color:"orange"}}>Country Name</th>
                    <th style={{color:"blue"}}>Total Confirmed</th>
                    <th style={{color:"green"}}>Total Recovered</th>
                    <th style={{color:"red"}}>Total Deaths</th>

                </tr>
                </thead>
                <tbody>
                {listedCountry.map(item => (
                    <tr key={item.Country}>
                        <td>{item.Country}</td>
                        <td>{item.TotalConfirmed}</td>
                        <td>{item.TotalRecovered}</td>
                        <td>{item.TotalDeaths}</td>

                    </tr>
                ))}
                </tbody>
            </Table>
            </div>
        )
    }
    else
        return <p>Loading...</p>

}

export default MostAffectedCountry;
