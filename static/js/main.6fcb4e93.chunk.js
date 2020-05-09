(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{196:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(39),o=a.n(r),c=a(21),s=a(9),i=a(10),m=a(12),u=a(11),d=a(16),p=a(13),b=(a(81),a(70)),E=a.n(b),h=(a(52),a(28)),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).numberWithCommas=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("span",{className:"mainText"},this.props.global.country," ")),l.a.createElement("br",null),l.a.createElement("div",{className:"grid-container"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",{className:"grid-element confirmed"},l.a.createElement("h4",{className:"textStyle font"},"Total Confirmed"),l.a.createElement(h.a,{value:this.props.global.totalConfirmed,thousandSeparator:!0,displayType:"text",renderText:function(e){return l.a.createElement("div",null,e)}})),l.a.createElement("span",{className:"grid-element recovered"},l.a.createElement("h4",{className:"textStyle font"},"Total Recovered"),l.a.createElement(h.a,{value:this.props.global.totalRecovered,thousandSeparator:!0,displayType:"text",renderText:function(e){return l.a.createElement("div",null,e)}}))),l.a.createElement("br",null),l.a.createElement("div",{className:"grid-container-death"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",{className:"grid-element death"},l.a.createElement("h4",{className:"textStyle font"},"Total Death"),l.a.createElement(h.a,{value:this.props.global.totalDeath,thousandSeparator:!0,displayType:"text",renderText:function(e){return l.a.createElement("div",null,e)}}))))}}]),a}(n.Component);a(98);var v={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},g={color:"#fff",textDecoration:"none"},y=function(){return l.a.createElement("header",{style:v},l.a.createElement("h1",null,"COVID19Tracker"),l.a.createElement("div",{className:"navbar"},l.a.createElement("span",{className:"icons"},l.a.createElement(d.b,{style:g,to:"/covid19tracker"},l.a.createElement("img",{src:"https://img.icons8.com/clouds/100/000000/home.png",className:"img"})),l.a.createElement("span",{className:"seperator"}," | "),l.a.createElement(d.b,{style:g,to:"/covid19tracker/hotspots"},l.a.createElement("img",{src:"https://img.icons8.com/plasticine/100/000000/combo-chart.png",className:"img"})),l.a.createElement("span",{className:"seperator"}," | "),l.a.createElement(d.b,{style:g,to:"/covid19tracker/about"},l.a.createElement("img",{src:"https://img.icons8.com/plasticine/100/000000/about.png",className:"imgAbout"})))))},T=a(73),C=a.n(T),x=a(74),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("span",{className:"mainText"},"Top 3")),l.a.createElement("br",null),l.a.createElement(x.a,{width:100,height:200,data:this.props.hotspots,options:{maintainAspectRatio:!1}}),l.a.createElement("br",null),l.a.createElement("center",null,"PS: ",l.a.createElement("i",null,"Few values might be insignificant to be shown in chart")))}}]),a}(n.Component),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("b",null,"Under construction. Details about covid19 will be shown here!")))}}]),a}(n.Component);a(195);function j(e,t,a,n){return{labels:e,datasets:[{label:"Total Confirmed",data:t,backgroundColor:"rgba(54, 162, 235, 0.6)"},{label:"Total Recovered",data:a,backgroundColor:"rgba(35, 203, 167, 1)"},{label:"Total Death",data:n,backgroundColor:"rgba(255, 0, 0, 1)"}]}}var S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={global:[],countries:[],options:[],country:"",hotspots:[]},e.toggleFun=function(t){"Global Status"===t.value?e.setState({country:e.state.global}):e.setState({country:e.state.countries.filter((function(e){return e.country===t.value}))[0]}),e.defaultOption=t.value},e.defaultOption="Choose a country..",e.max1=-1,e.max2=-1,e.max3=-1,e.first=null,e.second=null,e.third=null,e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://api.covid19api.com/summary").then((function(t){var a,n,l,r,o=(a="Global Status",n=t.data.Global.TotalConfirmed,l=t.data.Global.TotalRecovered,r=t.data.Global.TotalDeaths,{country:a,totalConfirmed:n,totalRecovered:l,totalDeath:r});e.setState({global:o}),e.setState({country:o});var s,i=t.data.Countries;e.setState({options:[].concat(Object(c.a)(e.state.options),[e.state.global.country])});for(var m=0;m<i.length;m++){i[m].TotalConfirmed>e.max1?(e.first=i[m],e.max1=i[m].TotalConfirmed):i[m].TotalConfirmed>e.max2?(e.second=i[m],e.max2=i[m].TotalConfirmed):i[m].TotalConfirmed>e.max3&&(e.third=i[m],e.max3=i[m].TotalConfirmed);var u={country:(s=i[m]).Country,totalConfirmed:s.TotalConfirmed,totalRecovered:s.TotalRecovered,totalDeath:s.TotalDeaths};e.setState({options:[].concat(Object(c.a)(e.state.options),[i[m].Country])}),e.setState({countries:[].concat(Object(c.a)(e.state.countries),[u])})}var d=[],p=[],b=[],E=[],h=[];h.push(e.first),h.push(e.second),h.push(e.third);for(var f=0;f<h.length;f++)d.push(h[f].Country),p.push(h[f].TotalConfirmed),b.push(h[f].TotalRecovered),E.push(h[f].TotalDeaths);e.setState({hotspots:[].concat(Object(c.a)(e.state.hotspots),[j(d,p,b,E)])})}))}},{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(y,{scope:this}),l.a.createElement(p.a,{exact:!0,path:"/covid19tracker",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{global:e.state.country}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"grid-container-main"},l.a.createElement("div",{className:"grid-item"}),l.a.createElement("div",{className:"grid-item dropdown"},l.a.createElement(C.a,{options:e.state.options,onChange:e.toggleFun,value:e.defaultOption,placeholder:"Select an option",name:"country"})),l.a.createElement("div",{className:"grid-item"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}),l.a.createElement(p.a,{path:"/covid19tracker/hotspots",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O,{hotspots:e.state.hotspots[0]}))}}),l.a.createElement(p.a,{path:"/covid19tracker/about",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null))}})))}}]),a}(n.Component);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root"))},52:function(e,t,a){},76:function(e,t,a){e.exports=a(196)},81:function(e,t,a){},98:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.6fcb4e93.chunk.js.map