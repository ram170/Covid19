import React, { Component } from 'react'
import './Currentstats.css';
import NumberFormat from 'react-number-format';

class Currentstats extends Component {
    // state = {
    //     values: []
    // }
    // setValue = () => {
    //     this.setState( {values: [...this.state.values,this.props.global.totalConfirmed]});
    //     console.log(this.state.values,this.props.global.totalConfirmed,this.props.global.totalConfirmed);
    //     this.setState( {values: [...this.state.values,this.props.global.totalDeath]});
    //     this.setState( {values: [...this.state.values,this.props.global.totalRecovered]});
    //     console.log("here")
    //     console.log(this.state.values)
    //     // debugger
    // }
    numberWithCommas= (num) => {
        // debugger;
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    render() {
        // {debugger}
        return (
            <div>
                {/* {this.setValue()} */}
                <br></br>
                <center><span className = "mainText">{this.props.global.country} </span></center>
                <br></br>
                <div className = "grid-container">
                    <span></span>
                    <span></span>
                    <span className = "grid-element confirmed">
                        <h4 className = "textStyle font">Total Confirmed</h4>
                        {/* { this.props.global.totalConfirmed } */}
                        <NumberFormat value = { this.props.global.totalConfirmed } thousandSeparator = { true } displayType = { 'text' } renderText={ value => <div>{value}</div>}/>
                    </span>
                    {/* <span></span> */}
                    <span className = "grid-element recovered">
                        <h4 className = "textStyle font">Total Recovered</h4>
                        {/* { this.props.global.totalRecovered } */}
                        <NumberFormat value = { this.props.global.totalRecovered } thousandSeparator = { true } displayType = { 'text' } renderText={ value => <div>{value}</div>}/>
                    </span>
                    {/* <span></span> */}
                </div>
                <br></br>
                <div className = "grid-container-death">
                    <span></span>
                    <span></span>
                    <span className = "grid-element death">
                        <h4 className = "textStyle font">Total Death</h4>
                        {/* { this.props.global.totalDeath } */}
                        <NumberFormat value = { this.props.global.totalDeath } thousandSeparator = { true } displayType = { 'text' } renderText={ value => <div>{value}</div>}/>
                    </span>
                </div>
            </div>
        )
    }
}


export default Currentstats
