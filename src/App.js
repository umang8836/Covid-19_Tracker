import React from 'react';
//import { BrowserRouter } from 'react-router-dom';
//import { HashRouter} from 'react-router-dom';

import Statistic from './components/Stats';
import Header from './components/Header1';
import Footer from './components/Footer';
import './App.css';


const App = () =>{
   
  return (
    
        <div className="outerDiv"> 
              <Header />
              <Statistic />
              <br/> <br/>
              <Footer />
          </div>
      );
   
  
}

export default App;
