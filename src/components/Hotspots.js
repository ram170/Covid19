import React, { Component } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2';
import './Currentstats.css';

export class Hotspots extends Component {
    render() {
        {debugger}
        return (
            <div>
                <br></br>
                <center><span className="mainText">Top 3</span></center>
                <br></br>
                <Bar 
                width={100}
                height={200}
                data = {this.props.hotspots }
                options={{
                    maintainAspectRatio: false
                }}
                />
                <br></br>
                <center>PS: <i>Few values might be insignificant to be shown in chart</i></center>
            </div>
        )
    }
}

export default Hotspots