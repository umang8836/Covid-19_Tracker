import React from 'react';
import { Table } from 'reactstrap';

const DistrictTable = ({ stateName, stateData }) => {

    if (stateData && stateName) {
        let district = Object.entries(stateData[stateName].districtData);
        console.log("inside district table", district)

        return (
            <div>
                <br />
                <h4>{stateName}</h4>
                <Table responsive>
                    <thead>
                        <tr key="heading">
                            <th>District Name</th>
                            <th style={{color:"blue"}}>Total Confirmed</th>
                            <th style={{color:"orange"}}>Total Active</th>
                            <th style={{color:"green"}}>Total Recovered</th>
                            <th style={{color:"red"}}>Total Deaths</th>

                        </tr>
                    </thead>
                    <tbody>
                        {district.map(item => (
                            <tr key={item[0]}>
                                <td>{item[0]}</td>
                                <td>{item[1].confirmed}</td>
                                <td>{item[1].active}</td>
                                <td>{item[1].recovered}</td>
                                <td>{item[1].deceased}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <br />
            </div>
        )
    }
    else {
        return <p></p>
    }


}

export default DistrictTable;