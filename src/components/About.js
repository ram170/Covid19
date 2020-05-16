import React, { Component } from 'react'
import './About.css';
import {Animated} from "react-animated-css";

export class About extends Component {
    render() {
        return (
            <div>
                 <Animated animationIn="fadeInLeft" isVisible={true}>
                <br></br>
                {/* <center><b>Under construction. Details about covid19 will be shown here!</b></center> */}
                {/* <span className="mainText text">About COVID19</span> */}
                <br></br>
                <div class = "container-fluid">
                <div className = "grid-container-main-about row">
                    <div className = "grid-item-about col-sm-2"></div>
                    
                    <div className = "grid-item-about col-sm-8"><span className="mainText text">About COVID19</span><span className = "subtext"><br></br><br></br><ul><li>The COVID-19 pandemic, also known as the coronavirus pandemic, is an ongoing pandemic of coronavirus disease 2019 (COVID‑19) caused by severe acute respiratory syndrome coronavirus 2 (SARS‑CoV‑2).</li> <li>Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.</li></ul></span></div>
                    <div className = "grid-item-about col-sm-2"></div>
                </div>
                </div>
                </Animated>
                {/* <br></br> */}
                {/* <br></br> */}
                {/* <center><span className="mainText">How it spreads</span></center> */}
                <Animated animationIn="fadeInRight" isVisible={true}>
                <br></br>
                <div class = "container-fluid">
                <div className = "grid-container-main-about row">
                    <div className = "grid-item-about col-sm-2"></div>
                    <div className = "grid-item-about col-sm-8"><span className="mainText">How it spreads</span><span className = "subtext"><br></br><br></br><ul><li> The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.</li><li>You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.</li></ul></span></div>
                    <div className = "grid-item-about col-sm-2"></div>
                </div>
                </div>
                </Animated>
                {/* <br></br> */}
                {/* <br></br> */}
                {/* <center><span className="mainText">How can I stay safe from it?</span></center> */}
                <Animated animationIn="fadeInLeft" isVisible={true}>
                <br></br>
                <div class = "container-fluid">
                <div className = "grid-container-main-about row">
                    <div className = "grid-item-about col-sm-2"></div>
                    <div className = "grid-item-about col-sm-8"><span className="mainText">How can I stay safe from it?</span><span className = "subtext"><br></br><br></br><p>Checkout WHO's website =><a href = "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target = "_blank"><img src="https://img.icons8.com/bubbles/100/000000/help.png"/></a></p></span></div>
                    <div className = "grid-item-about col-sm-2"></div>
                </div>
                </div>
                <br></br>
                <br></br>
                </Animated>
            </div>
        )
    }
}

export default About
