(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{33:function(e,t,a){e.exports=a(65)},38:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),o=a.n(l),c=a(14),s=a(8),i=a(9),m=a(11),u=a(10),d=a(13),p=a(6),v=(a(38),a(29)),h=a.n(v),E=(a(56),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).numberWithCommas=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("span",{className:"mainText"},this.props.global.country," ")),r.a.createElement("br",null),r.a.createElement("div",{className:"grid-container"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",{className:"grid-element confirmed"},r.a.createElement("h4",{className:"textStyle"},"Total Confirmed"),this.props.global.totalConfirmed),r.a.createElement("span",{className:"grid-element recovered"},r.a.createElement("h4",{className:"textStyle"},"Total Recovered"),this.props.global.totalRecovered)),r.a.createElement("br",null),r.a.createElement("div",{className:"grid-container-death"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",{className:"grid-element death"},r.a.createElement("h4",{className:"textStyle"},"Total Death"),this.props.global.totalDeath)))}}]),a}(n.Component));a(57);var b={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},g={color:"#fff",textDecoration:"none"},f=function(){return r.a.createElement("header",{style:b},r.a.createElement("h1",null,"COVID19Tracker"),r.a.createElement("div",{className:"navbar"},r.a.createElement(d.b,{style:g,to:"/covid19tracker"},r.a.createElement("img",{src:"https://img.icons8.com/clouds/100/000000/home.png",className:"img"}),r.a.createElement("span",{className:"seperator"}," | ")),r.a.createElement(d.b,{style:g,to:"/covid19tracker/hotspots"},r.a.createElement("img",{src:"https://lh6.googleusercontent.com/proxy/jvouw-usLvVGkCvIcwQeBGU97Vb12Jhd64TgENsLv0NOJN0LyehcajyqpPklT566_4YOiLSitBT_OcGXQDrgJzEIml1AoeGMgs9FG3fLGLyi",className:"imgFire"}))))},y=a(32),O=a.n(y),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("p",null,r.a.createElement("bold",null,"UnderConstruction. Top 3 countries with most covid19 cases will be shown here."))))}}]),a}(n.Component);a(64);var C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={global:[],countries:[],options:[],country:""},e.toggleFun=function(t){"Global Status"===t.value?e.setState({country:e.state.global}):e.setState({country:e.state.countries.filter((function(e){return e.country===t.value}))[0]}),e.defaultOption=t.value},e.defaultOption="Choose a country..",e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://api.covid19api.com/summary").then((function(t){var a,n,r,l,o=(a="Global Status",n=t.data.Global.TotalConfirmed,r=t.data.Global.TotalRecovered,l=t.data.Global.TotalDeaths,{country:a,totalConfirmed:n,totalRecovered:r,totalDeath:l});e.setState({global:o}),e.setState({country:o});var s,i=t.data.Countries;e.setState({options:[].concat(Object(c.a)(e.state.options),[e.state.global.country])});for(var m=0;m<i.length;m++){var u={country:(s=i[m]).Country,totalConfirmed:s.TotalConfirmed,totalRecovered:s.TotalRecovered,totalDeath:s.TotalDeaths};e.setState({options:[].concat(Object(c.a)(e.state.options),[i[m].Country])}),e.setState({countries:[].concat(Object(c.a)(e.state.countries),[u])})}}))}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,{scope:this}),r.a.createElement(p.a,{exact:!0,path:"/covid19tracker",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{global:e.state.country}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"grid-container-main"},r.a.createElement("div",{className:"grid-item"}),r.a.createElement("div",{className:"grid-item dropdown"},r.a.createElement(O.a,{options:e.state.options,onChange:e.toggleFun,value:e.defaultOption,placeholder:"Select an option",name:"country"})),r.a.createElement("div",{className:"grid-item"})))}}),r.a.createElement(p.a,{path:"/covid19tracker/hotspots",component:N})))}}]),a}(n.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.06674d86.chunk.js.map