import React  from 'react';
import Display from '../DisplayCases';


const CountryData = ({countryName , allData }) => {

    if (allData.Countries && countryName) {
        let countryToShow = allData.Countries.filter(x => x.Country.search(new RegExp(countryName, "i")) !== -1)
        console.log(countryToShow)

        return (
            <div>
                <div>
                    {countryToShow.map(item => (
                        <div key={item.Country}>
                            <h4>{item.Country}</h4>
                            <div className="row">
                                <Display key={item.TotalConfirmed} name="Total Confirmed" number={item.TotalConfirmed} color="info" font="white" />
                                <Display key={item.TotalRecovered} name="Total Recovered" number={item.TotalRecovered} color="success" font="white" />
                                <Display key={item.TotalDeaths} name="Total Deaths" number={item.TotalDeaths} color="danger" font="white" />

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )

    }
    else return <p></p>
}

export default CountryData;


