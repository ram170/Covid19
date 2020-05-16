import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Currentstats from './components/Currentstats';
import Banner from './components/Banner';
import Dropdown from 'react-dropdown';
import Hotspots from './components/Hotspots';
import About from './components/About';
import 'react-dropdown/style.css';
import {Animated} from "react-animated-css";
// import * as ReactBootStrap from 'React-bootStrap'
import { Spinner } from 'react-bootstrap';

export class App extends Component {
  constructor () {
    super();
    this.defaultOption = "Choose a country..";
    this.max1 = -1;
    this.max2 = -1;
    this.max3 = -1;
    this.first = null;
    this.second = null;
    this.third = null;
  }
  state = {
    global: [],
    countries: [],
    options: [],
    country: '',
    hotspots: [],
    loadingDone: false
  }
  
  toggleFun = (e) => { 
    // let currentShow = this.state.countries.map((value) => {
    //   if(value.Country === e.value) {
    //     return value;
    //   }
    // });
    if (e.value === "Global Status") {
      this.setState({ country: this.state.global});
    }
    else {
      this.setState({ country: this.state.countries.filter(value => value.country === e.value)[0] });
    }
    this.defaultOption = e.value;
    // debugger;
  };

  componentDidMount() {
    // debugger
    axios.get('https://api.covid19api.com/summary')
    .then(res => {
      let stateJSON = createJSON("Global Status", res.data.Global.TotalConfirmed, res.data.Global.TotalRecovered , res.data.Global.TotalDeaths);
      this.setState({global: stateJSON});
      this.setState({country: stateJSON});
      let countriesvar = res.data.Countries;
      this.setState({options: [...this.state.options, this.state.global.country]});
      for (var i = 0; i < countriesvar.length; i++) {
        if (countriesvar[i].TotalConfirmed > this.max1) {
          this.first = countriesvar[i];
          this.max1 = countriesvar[i].TotalConfirmed;
        } else if (countriesvar[i].TotalConfirmed > this.max2) {
          this.second = countriesvar[i];
          this.max2 = countriesvar[i].TotalConfirmed;
        }
        else if (countriesvar[i].TotalConfirmed > this.max3) {
          this.third = countriesvar[i];
          this.max3 = countriesvar[i].TotalConfirmed;
        }
        let countryJSON = createCountryJSON(countriesvar[i])
        // options.push(countriesvar[i].Country);
        this.setState({options: [...this.state.options, countriesvar[i].Country]});
        this.setState({countries: [...this.state.countries, countryJSON] });
      }
      let chartCountry = [];
      let chartTotalPop = [];
      let chartTotalRec = [];
      let chartTotalDeath = [];
      let chartValues = [];
      chartValues.push(this.first);
      chartValues.push(this.second);
      chartValues.push(this.third);
      for ( let i = 0; i < chartValues.length; i++) {
        chartCountry.push(chartValues[i].Country);
        chartTotalPop.push(chartValues[i].TotalConfirmed);
        chartTotalRec.push(chartValues[i].TotalRecovered);
        chartTotalDeath.push(chartValues[i].TotalDeaths);
      }
      this.setState({hotspots: [...this.state.hotspots,createHotspot(chartCountry, chartTotalPop, chartTotalRec, chartTotalDeath)]});
      this.setState({loadingDone: true})
      debugger;
    });
    // debugger
    // axios.get('https://api.covid19api.com/summary')
    // .then(res => { 
      // let countries = res.data.Countries;
      // debugger;
      // countries.map((value) => {
      //   this.setState({countries: [...this.state.countries, value]})
      // })
      // let i=0;
      // countries.map((value) =>{
      //   let x = {};
      //   let y = {Country, TotalConfirmed};
      //   x['id'] = i;
      //   x['Country'] = String(value.Country);
      //   x['TotalConfirmed'] = String(value.TotalConfirmed);
      //   y.Country = x['Country'];
      //   y.TotalConfirmed = x['TotalConfirmed'];
      //   // y['0'] = x;

      //   debugger
      //   this.setState({countries: [...this.state.countries, y]})
      //   debugger
      //   i++;
      // })
      // debugger
      // this.setState({ countries: countries})
    // });
  }

  render() {
    return (
      <Router>
        <div className = "App">
          <Banner scope = { this} />
          <center>{ this.state.loadingDone? null : <Spinner animation="grow" />}</center>
          <Route exact path="/covid19tracker" render={props => (
            <React.Fragment>
              <Animated animationIn="slideInLeft" isVisible={true}>
              <Currentstats global = { this.state.country } />
              {/* {this.state.countries.map((value) => {if(value.country === "Afghanistan") return value.totalConfirmed;})} */}
              </Animated>
              <br></br>
              <br></br>
              <Animated animationIn="slideInRight" isVisible={true}>
              <div className = "grid-container-main">
                <div className = "grid-item"></div>
                <div className = "grid-item dropdown">
                  <Dropdown options={this.state.options} onChange={this.toggleFun} value={this.defaultOption} placeholder="Select an option" name = "country" />
                </div>
                <div className = "grid-item"></div>
              </div>
              </Animated>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className = "grid-container-main" style = {bottomStyle}>
                <div></div>
                <div><center><p><b>Thanks for checking out the site!</b></p></center><center><p><i>Stay safe!</i></p></center></div>
                {/* <center><a href = "https://api.covid19api.com/summary" target = "_blank">API</a></center> */}
              </div>
            </React.Fragment>
          )} />
          <Route path="/covid19tracker/hotspots" render={props => ( 
            <React.Fragment>
              <Hotspots hotspots = { this.state.hotspots[0] }/>
            </React.Fragment>  
          )} />
          <Route path="/covid19tracker/about" render={props => ( 
            <React.Fragment>
              <About />
            </React.Fragment>  
          )} />
        </div>
      </Router>
    )
  }
}

function createJSON(scope, total, recovered, death) {
  return {
    country: scope,
    totalConfirmed: total,
    totalRecovered: recovered,
    totalDeath: death
  }
}

function createCountryJSON(country) {
  return {
    country: country.Country,
    totalConfirmed: country.TotalConfirmed,
    totalRecovered: country.TotalRecovered,
    totalDeath: country.TotalDeaths
  }
}

function createHotspot(country, totalPop, totalRec, totalDeath) {
  return {
    labels: country,
    datasets: [
      {
      label: 'Total Confirmed',
      data: totalPop,
      backgroundColor:
        // ' rgba(77, 5, 232, 1)',
        'rgba(54, 162, 235, 0.6)',
        // 'rgba(255, 206, 86, 0.6)',
        // 'rgba(75, 192, 192, 0.6)',
        // 'rgba(153, 102, 255, 0.6)',
        // 'rgba(255, 159, 64, 0.6)',
        // 'rgba(255, 99, 132, 0.6)'
      },
      {
        label: 'Total Recovered',
        data: totalRec,
        backgroundColor: 'rgba(35, 203, 167, 1)'
      },
      {
        label: 'Total Death',
        data: totalDeath,
        backgroundColor: 'rgba(255, 0, 0, 1)'
      }
    ]
  }
}
const bottomStyle = {
  background: '#333',
  color: '#fff',
  // textAlign: 'center',
  padding: '10px',
  bottom: '0px'
}

export default App

