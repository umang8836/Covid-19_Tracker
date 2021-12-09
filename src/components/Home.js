import React from 'react';
//import logo from './images/6.jpg';
import logo from '../images/logo.jpg';
import img1 from '../images/12.jpg';
import img3 from '../images/10.jpg';
import img4 from '../images/11.jpg';
import img5 from '../images/2.jpg';
import symptoms from '../images/symptoms.png';
import ReactPlayer from "react-player";





const Home = () => {
    return (
        <div className="outerDiv">
            <header className="App">
                <br />
                <h3>COVID-19 TRACKER</h3>
                <br /><br />
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <br /><br />

            <div className="row home">
                <div className="col-md-8" >
                    <h3>Overview</h3>
                    <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
                    <br /> Most people who fall sick with COVID-19 will experience mild to moderate symptoms.</p>
                    <h6>HOW IT SPREADS</h6>
                    <p>The virus that causes COVID-19 is mainly transmitted through droplets.
                        <br /> These droplets are generated when an infected person coughs, sneezes, or exhales.
                        <br />  These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.
                    <br /> You can be infected by breathing in the virus if you are within close proximity of infected person, or
                    <br />  by touching a contaminated surface and then your eyes, nose or mouth.</p>
                </div>
                <div className="col-md-4">
                    {/*<img src={img1} alt="img1" height="300vh" width="230vw"  />*/}
                    <img src={img1} alt="img1" width="100%" />

                </div>
            </div>

            <hr /><br /><br />


            <div className="row home">

                <div className="col-md-7" >
                    <h3>Symptoms</h3>
                    <p>COVID-19 affects different people in different ways.</p><p> Most infected people will develop mild to moderate illness.</p>
                    <div className="row">
                        <ul>Most common symptoms:
                        <li>fever</li>
                            <li>dry cough</li>
                            <li>tiredness</li>
                            <li>difficulty breathing</li>
                            <li>chest pain or pressure</li>
                            <li>loss of speech or movement </li>
                        </ul>

                        <ul> Less common symptoms:
                            <li>aches and pains</li>
                            <li>sore throat</li>
                            <li>diarrhoea</li>
                            <li>conjunctivitis</li>
                            <li>headache</li>
                            <li>loss of taste or smell</li>
                            <li>a rash on skin</li>
                            <li>discolouration of fingers or toes</li>
                        </ul>


                    </div>
                </div>
                <div className="col-md-5">
                    <img src={symptoms} alt="img1" width="100%" />

                    {/*<img src={symptoms} alt="img1" height="350vh" width="250vw"  />*/}
                    {/*<img src={img2} alt = "img2" srcSet={`${img2} 0w, ${img2} 0w`} />*/}
                </div>

            </div>

            <hr /><br /><br />
            <div className="row home">
                <div className="col-md-6">
                    <h3>Prevention</h3>
                    <p>Protect yourself and others around you by knowing the facts and <br /> taking appropriate precautions.</p>
                    <p>Follow advice provided by your local public health agency.</p>
                    <ul>To prevent the spread of COVID-19:
                        <li>Clean your hands often. Use soap and water, or an alcohol-based hand rub.</li>
                        <li>Maintain a safe distance from anyone who is coughing or sneezing.</li>
                        <li>Don’t touch your eyes, nose or mouth.</li>
                        <li>Stay home if you feel unwell.</li>
                        <li>Follow the directions of your local health authority.</li>
                    </ul>
                    <p>Avoiding unneeded visits to medical facilities allows healthcare systems <br /> to operate more effectively, therefore protecting you and others.</p>
                </div>
                <div className="col-md-6">
                    {/*<img src={img3} alt="img3" height="400vmin" width="250vmin" />
                    <img src={img4} alt="img3" height="400vmin" width="250vmin" />*/}

                    <img src={img3} alt="img3"  width="100%" />
                    <img src={img4} alt="img3"  width="100%" />
                </div>
            </div>
            <hr /><br /><br />

            <div className="App outerDiv">
                <h3>For More Details:</h3>
                <a href="https://www.mygov.in/covid-19/" className="App-link">VISIT US:</a> <br /><br />
                <div className="row home">
                    <div className="col-md-4"><ReactPlayer url="https://www.youtube.com/watch?v=7z0kzYpuqhw" height="" width="auto" /></div>
                    <div className="col-md-4"><ReactPlayer url="https://www.youtube.com/watch?v=U8r3oTVMtQ0" height="auto" width="auto" /></div>
                    <div className="col-md-4"><ReactPlayer url="https://youtu.be/8c_UJwLq8PI" height="auto" width="auto" /></div>

                </div>
                <br /><br />
                <img src={img5} alt="img5" className="img-center" />

            </div>


        </div>

    )
}

export default Home;