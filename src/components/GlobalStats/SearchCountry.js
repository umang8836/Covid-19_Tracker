import React, { useState}  from 'react';
import Select from "react-select";
import CountryData from './CountryData';
import Chart from './Chart/Chart';


const SearchCountry = ({allData}) =>{

    const [countryName, setCountryName] = useState('')

    const changeName = (event) =>{
        setCountryName(event.value)
    }

    return (
        <div>
            {/*<input type="text" value={countryName} onChange={changeName} placeholder="Enter Country Name" className="searchBar" /> */}
            <br /> <br/>
            <h3>Search Country-wise Status</h3>

            {allData.Countries ? (

                <Select options={allData.Countries.map(item => {
                    return {
                        label: item.Country,
                        value: item.Country
                    }
                })}
                    onChange={changeName} placeholder="Enter Country Name" />


            ) : null}
            <br />
            <CountryData countryName={countryName} allData={allData} />  
            <Chart countryName={countryName} />
  

        </div>
    )
}

export default SearchCountry;