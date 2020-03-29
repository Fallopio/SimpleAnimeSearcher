(this["webpackJsonpaime_searche_1.1"]=this["webpackJsonpaime_searche_1.1"]||[]).push([[0],{14:function(e,t,a){},22:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),i=a.n(s),c=(a(27),a(16)),l=a(17),o=a(20),u=a(21),m=a(8),f=a(5),d={apiURL:"https://kitsu.io/api/edge/anime?",nameSearch:"&filter[text]=",topRated:"&sort=ratingRank",mostPop:"&sort=popularityRank",topAir:"&filter[status]=current&sort=popularityRank",resultsNum:16,pageLim:"&page[limit]=",pageOff:"&page[offset]="},p="topRated",h="mostPop",g="topAir",v=function(e){return""===e.searchInput?d.apiURL+d[e.searchType]+d.pageLim+d.resultsNum+d.pageOff+e.pgOffset:d.apiURL+d.nameSearch+e.searchInput+d.pageLim+d.resultsNum+d.pageOff+e.pgOffset},E=function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return e.data}))};a(28);var S=function(e){return r.a.createElement("div",{className:"buttonBar"},r.a.createElement("button",{value:p,onClick:e.sort},"Top rated"),r.a.createElement("button",{value:h,onClick:e.sort},"Most popular"),r.a.createElement("button",{value:g,onClick:e.sort},"Top Airing"))};a(29);function N(e){return r.a.createElement("div",{className:"searchBar"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Search anime",onChange:e.search}),r.a.createElement(m.b,{className:"link",to:"/SimpleAnimeSearcher"},"Home"),r.a.createElement(m.b,{className:"link",to:"/favorites"},"Favorites"))}a(35);var b=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement(N,{search:e.search}),r.a.createElement(S,{sort:e.sort}))};a(36);var I=function(e){return r.a.createElement("div",{className:"card",id:e.id},e.children,r.a.createElement("button",{className:"cardButton",onClick:function(e){"card"===e.target.parentElement.className?(e.target.parentElement.className="cardGrow",e.target.innerText="Hide",document.getElementById(e.target.parentElement.id+"desc").className="desc"):"cardGrow"===e.target.parentElement.className&&(e.target.parentElement.className="card",e.target.innerText="More info",document.getElementById(e.target.parentElement.id+"desc").className="descHide")}},"More info"))};a(14);function y(e){return r.a.createElement("div",{style:{backgroundColor:"#000000"}},r.a.createElement("div",{className:"list"},e.animeArr.map((function(t){return r.a.createElement(I,{key:t.id,id:t.id},r.a.createElement("h3",{className:"cardH"},r.a.createElement("span",{className:"favIcon"},-1===e.favId.indexOf(t.id)?r.a.createElement("i",{style:{color:"#FF851B"},className:"far fa-star",onClick:function(){e.fav(t)}}):r.a.createElement("i",{style:{color:"#FF851B"},className:"fas fa-star",onClick:function(){e.fav(t)}})),"Title: ",t.attributes.canonicalTitle),r.a.createElement("p",null,"Avrage Rating:   ",t.attributes.averageRating),r.a.createElement("p",null,"Popularity rank: ",t.attributes.popularityRank),r.a.createElement("p",null,"Age rating: ",t.attributes.ageRating),r.a.createElement("p",null,"Number of episodes: ",t.attributes.episodeCount),r.a.createElement("p",null,"Status: ",t.attributes.status),r.a.createElement("img",{className:"img",src:t.attributes.posterImage.medium,alt:""}),r.a.createElement("p",{className:"descHide",id:t.id+"desc"},"Synopsis: ",t.attributes.synopsis))}))),r.a.createElement("button",{onClick:e.more},"Show more"))}function k(e){return r.a.createElement("div",{className:"list"},e.favArr.map((function(t){return r.a.createElement(I,{key:t.attributes.canonicalTitle+"fav",id:t.id},r.a.createElement("h3",null,r.a.createElement("span",{className:"favIcon"},r.a.createElement("i",{style:{color:"#FF851B"},className:"fas fa-star",onClick:function(){return e.fav(t)}})),"Title: ",t.attributes.canonicalTitle),r.a.createElement("p",null,"Avrage Rating:   ",t.attributes.averageRating),r.a.createElement("p",null,"Age rating: ",t.attributes.ageRating),r.a.createElement("p",null,"Number of episodes: ",t.attributes.episodeCount),r.a.createElement("p",null,"Status: ",t.attributes.status),r.a.createElement("img",{className:"img",src:t.attributes.posterImage.medium,alt:""}),r.a.createElement("p",{className:"descHide",id:t.id+"desc"},"Synopsis: ",t.attributes.synopsis))})))}var O=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleButtonSort=function(e){n.setState({searchType:e.target.value,searchInput:"",pgOffset:0},(function(){E(v(n.state)).then((function(e){return n.setState({searchResults:e})}))}))},n.handleSearch=function(e){n.setState({searchInput:e.target.value,pgOffset:0},(function(){E(v(n.state)).then((function(e){return n.setState({searchResults:e})}))}))},n.handleMore=function(){n.setState({pgOffset:n.state.pgOffset+d.resultsNum},(function(){E(v(n.state)).then((function(e){return n.setState({searchResults:n.state.searchResults.concat(e)})}))}))},n.handleFav=function(e){if(localStorage.clear(),-1===n.state.favorites.indexOf(e)&&-1===n.state.favId.indexOf(e.id))n.setState({favorites:n.state.favorites.concat([e]),favId:n.state.favId.concat([e.id])});else{var t=n.state.favorites,a=n.state.favId;t.splice(a.indexOf(e.id),1),a.splice(a.indexOf(e.id),1),n.setState({favorites:t,favId:a})}},n.state={searchInput:"",searchType:h,searchResults:[],favorites:[],favId:[],pgOffset:0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;if(localStorage.length>0){JSON.parse(localStorage.getItem("1"));this.setState({favorites:JSON.parse(localStorage.getItem("1")),favId:JSON.parse(localStorage.getItem("2"))})}E(v(this.state)).then((function(t){return e.setState({searchResults:t})}))}},{key:"componentDidUpdate",value:function(){this.state.favorites.length>0&&(localStorage.setItem("1",JSON.stringify(this.state.favorites)),localStorage.setItem("2",JSON.stringify(this.state.favId)))}},{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(b,{sort:this.handleButtonSort,search:this.handleSearch}),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/SimpleAnimeSearcher"},r.a.createElement(y,{animeArr:this.state.searchResults,more:this.handleMore,fav:this.handleFav,favArr:this.state.favorites,favId:this.state.favId})),r.a.createElement(f.a,{exact:!0,path:"/favorites"},r.a.createElement(k,{favArr:this.state.favorites,fav:this.handleFav}))))}}]),a}(r.a.Component);var R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f9549e40.chunk.js.map