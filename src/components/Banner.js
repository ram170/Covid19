import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

function Banner() {
    return (
        <header style = {headerStyle}>
            <h1>COVID19Tracker</h1>
            <div  className = "navbar">
                <span className = "icons">
                <Link style = { linkStyle } to="/covid19tracker">
                    {/* old house */}
                    <img src= "https://img.icons8.com/clouds/100/000000/home.png" className = "img"></img>
                    {/* Neon house */}
                    {/* <img src="https://img.icons8.com/nolan/64/home.png" className = "img"/> */}
                    {/* <img src="https://img.icons8.com/ultraviolet/40/000000/home-page.png" className = "img"/> */}
                </Link>
                <span className = "seperator"> | </span>
                <Link style = { linkStyle } to="/covid19tracker/hotspots">
                    {/* Fire icon link  */}
                    {/* <img src="https://lh6.googleusercontent.com/proxy/jvouw-usLvVGkCvIcwQeBGU97Vb12Jhd64TgENsLv0NOJN0LyehcajyqpPklT566_4YOiLSitBT_OcGXQDrgJzEIml1AoeGMgs9FG3fLGLyi" className = "imgFire"></img> */} 
                    {/* Pie chart */}
                    {/* <img src="https://img.icons8.com/plasticine/100/000000/chart.png" className = "img"/> */}
                    {/* Bar chart */}
                    <img src="https://img.icons8.com/plasticine/100/000000/combo-chart.png" className = "img"/>
                    {/* Neon chart */}
                    {/* <img src="https://img.icons8.com/nolan/64/rebalance-portfolio.png" className = "img2"/> */}
                    {/* <span className = "seperator"> | </span> */}
                </Link>
                <span className = "seperator"> | </span>
                <Link style = { linkStyle } to="/covid19tracker/about">
                <img src="https://img.icons8.com/plasticine/100/000000/about.png" className = "imgAbout" />
                </Link>
                </span>
            </div>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}


export default Banner;