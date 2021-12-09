import React, { useState,useEffect}  from 'react';
import Select from "react-select";
import axios from 'axios';
import DistrictTable from './districtTable';

const SearchDistrict = ()=>{
    const [stateData, setData] = useState([]);
    const [stateName, setstateName] = useState('')

    const changeName = (event) =>{
        setstateName(event.value)
    }
   
    useEffect(() => {
        console.log('effect')
        axios
            .get('https://api.covid19india.org/state_district_wise.json')
            .then(response => {
                console.log('promise fulfilled')
                console.log('allData',response.data)
                setData(response.data)
            })
            .catch((err) => console.log(err.message));

    }, []
    )

    /*
    let districtList = Object.entries(stateData).map((item) =>(
        Object.keys(item[1].districtData)
    ))*/

    let statelist = Object.keys(stateData);   
    console.log("inside search data",stateData)
    console.log("statelist",statelist)


    return(
        <div>
            {stateData ? (
            <Select options={statelist.map(item => {
                    return {
                        label: item,
                        value: item
                    }
                })}
                    onChange={changeName} placeholder="Enter State Name" />

             ) : null}       
             <br/>
            <DistrictTable stateName={stateName} stateData={stateData} /> 

        </div>
    )
    
}

export default SearchDistrict;