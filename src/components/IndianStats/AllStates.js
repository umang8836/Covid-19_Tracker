import React from 'react';
import { Table } from 'reactstrap';

const Allstates = ({ data }) => {
    
        let listedCountry = data.sort(function (a, b) { return b.active - a.active }).slice(1, 38);

        return (
            <div>
               

                <Table responsive dark>
                    <thead>
                        <tr key="heading">
                            <th>State Name</th>
                            <th style={{color:"blue"}}>Total Confirmed</th>
                            <th style={{color:"orange"}}>Total Active</th>
                            <th style={{color:"green"}}>Total Recovered</th>
                            <th style={{color:"red"}}>Total Deaths</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listedCountry.map(item => (
                            <tr key={item.state}>
                                <td>{item.state}</td>
                                <td>{item.confirmed}</td>
                                <td>{item.active}</td>
                                <td>{item.recovered}</td>
                                <td>{item.deaths}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
}
export default Allstates;