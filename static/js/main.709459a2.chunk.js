(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{19:function(e,t,a){e.exports=a(45)},24:function(e,t,a){},42:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),l=a.n(r),c=a(7),s=a(2),i=a(3),u=a(5),m=a(4),d=(a(24),a(17)),p=a.n(d),h=(a(42),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).numberWithCommas=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"grid-container"},o.a.createElement("span",{className:"grid-element"},o.a.createElement("h4",{className:"textStyle"},"Total Confirmed"),this.props.global.totalConfirmed),o.a.createElement("span",null),o.a.createElement("span",{className:"grid-element"},o.a.createElement("h4",{className:"textStyle"},"Total Recovered"),this.props.global.totalRecovered),o.a.createElement("span",null),o.a.createElement("span",{className:"grid-element"},o.a.createElement("h4",{className:"textStyle"},"Total Death"),this.props.global.totalDeath)))}}]),a}(n.Component));var v={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},f=function(){return o.a.createElement("header",{style:v},o.a.createElement("h1",null,"COVID19Tracker"))},g=a(18),b=a.n(g);a(44);var y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={global:[],countries:[],options:[],country:""},e.toggleFun=function(t){e.setState({country:e.state.countries.filter((function(e){return e.country===t.value}))})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.covid19api.com/summary").then((function(t){var a,n,o,r,l=(a="Global Status",n=t.data.Global.TotalConfirmed,o=t.data.Global.TotalRecovered,r=t.data.Global.TotalDeaths,{country:a,totalConfirmed:n,totalRecovered:o,totalDeath:r});e.setState({global:l}),e.setState({country:l});for(var s,i=t.data.Countries,u=0;u<i.length;u++){var m={country:(s=i[u]).Country,totalConfirmed:s.TotalConfirmed,totalRecovered:s.TotalRecovered,totalDeath:s.TotalDeaths};e.setState({options:[].concat(Object(c.a)(e.state.options),[i[u].Country])}),e.setState({countries:[].concat(Object(c.a)(e.state.countries),[m])})}}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,{scope:this}),o.a.createElement(h,{global:this.state.country}),o.a.createElement(b.a,{options:this.state.options,onChange:this.toggleFun,value:"Choose a value",placeholder:"Select an option",name:"country"}),";")}}]),a}(n.Component);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.709459a2.chunk.js.map