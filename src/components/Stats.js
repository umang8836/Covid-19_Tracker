import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import IndianStats from './IndianStats/indiaCases';
import Global from './GlobalStats/GlobalCases';
import Home from './Home';
import axios from 'axios';
import Map from './HereMap';







const Statistic = () => {

    const [allData, setData] = useState([])
   
    useEffect(() => {
        console.log('effect')
        axios
            .get('https://api.covid19api.com/summary')
            .then(response => {
                console.log('promise fulfilled')
                console.log('allData',response.data)
                setData(response.data)
            })
            .catch((err) => console.log(err.message));

    }, []
    )

    return (
        
        <Wrapper>
        <Switch>
          <Route exact path="/"> <IndianStats  /> </Route> 
          <Route path="/about"><Home /> </Route>
          <Route path="/global"> <Global data={allData}  /> </Route> 
          <Route path="/india"> <IndianStats  /> </Route> 
          <Route path="/map"> <Map  /> </Route> 


        </Switch>
    </Wrapper> 
    )
    
}
const Wrapper = styled.div`
`;

export default Statistic;