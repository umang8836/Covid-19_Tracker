import React from 'react';
import { Card,  CardTitle, CardText } from 'reactstrap';
import CountUp from 'react-countup';


const Display = ({name,number,color,font}) => {
    console.log("font-color",font)

  return (
        <Card body  color={color} className="text-center lesson-card" >
          <CardTitle className="lesson-item" style={{color:font}} >{name}</CardTitle>
          <CardText className="lesson-item" style={{color:font}}>  
            <CountUp start={0} end={number} duration={2.5} separator="," />
          </CardText>
        </Card>
     
  );
};

export default Display;