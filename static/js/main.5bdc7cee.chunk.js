(this["webpackJsonpaime_searche_1.1"]=this["webpackJsonpaime_searche_1.1"]||[]).push([[0],{15:function(e,t,a){},24:function(e,t,a){e.exports=a(39)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),i=a.n(s),c=(a(29),a(17)),l=a(18),o=a(22),u=a(23),m=a(8),f=a(6),p={apiURL:"https://kitsu.io/api/edge/anime?",nameSearch:"&filter[text]=",topRated:"&sort=ratingRank",mostPop:"&sort=popularityRank",topAir:"&filter[status]=current&sort=popularityRank",resultsNum:16,pageLim:"&page[limit]=",pageOff:"&page[offset]="},d="topRated",h="mostPop",v="topAir",g=function(e){return""===e.searchInput?p.apiURL+p[e.searchType]+p.pageLim+p.resultsNum+p.pageOff+e.pgOffset:p.apiURL+p.nameSearch+e.searchInput+p.pageLim+p.resultsNum+p.pageOff+e.pgOffset},E=function(e){return fetch(e,{method:"GET",headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json"}}).then((function(e){return e.json()})).then((function(e){return e.data}))};a(30);var S=function(e){return r.a.createElement("div",{className:"buttonBar"},r.a.createElement("button",{value:d,onClick:e.sort},"Top rated"),r.a.createElement("button",{value:h,onClick:e.sort},"Most popular"),r.a.createElement("button",{value:v,onClick:e.sort},"Top Airing"))};a(31);function N(e){return r.a.createElement("div",{className:"searchBar"},r.a.createElement("input",{className:"input",id:"search",type:"text",placeholder:"Search anime",onChange:e.search}),r.a.createElement(m.b,{className:"link",to:"/SimpleAnimeSearcher"},"Home"),r.a.createElement(m.b,{className:"link",to:"/SimpleAnimeSearcher/favorites"},"Favorites"))}a(36);var b=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement(N,{search:e.search}),r.a.createElement(S,{sort:e.sort}))};a(37);var y=function(e){return r.a.createElement("div",{className:"card",id:e.id},e.children,r.a.createElement("button",{className:"cardButton",onClick:function(e){"card"===e.target.parentElement.className?(e.target.parentElement.className="cardGrow",e.target.innerText="Hide",document.getElementById(e.target.parentElement.id+"desc").className="desc"):"cardGrow"===e.target.parentElement.className&&(e.target.parentElement.className="card",e.target.innerText="More info",document.getElementById(e.target.parentElement.id+"desc").className="descHide")}},"More info"))},I=(a(15),a(5)),k=a.n(I);function O(e){return r.a.createElement("div",{style:{backgroundColor:"#000000"}},r.a.createElement("div",{className:"list"},e.animeArr.map((function(t){return r.a.createElement(y,{key:t.id,id:t.id},r.a.createElement("h3",{className:"cardH"},r.a.createElement("span",{className:"favIcon"},-1===e.favId.indexOf(t.id)?r.a.createElement("i",{style:{color:"#FF851B"},className:"far fa-star",onClick:function(){e.fav(t)}}):r.a.createElement("i",{style:{color:"#FF851B"},className:"fas fa-star",onClick:function(){e.fav(t)}})),"Title: ",t.attributes.canonicalTitle),r.a.createElement("p",null,"Avrage Rating:   ",t.attributes.averageRating),r.a.createElement("p",null,"Popularity rank: ",t.attributes.popularityRank),r.a.createElement("p",null,"Age rating: ",t.attributes.ageRating),r.a.createElement("p",null,"Number of episodes: ",t.attributes.episodeCount),r.a.createElement("p",null,"Status: ",t.attributes.status),r.a.createElement("img",{className:"img",src:t.attributes.posterImage.medium,alt:""}),r.a.createElement("p",{className:"descHide",id:t.id+"desc"},"Synopsis: ",t.attributes.synopsis))}))),r.a.createElement("button",{onClick:e.more},"Show more"))}function R(e){return r.a.createElement("div",{className:"list"},e.favArr.map((function(t){return r.a.createElement(y,{key:t.attributes.canonicalTitle+"fav",id:t.id},r.a.createElement("h3",null,r.a.createElement("span",{className:"favIcon"},r.a.createElement("i",{style:{color:"#FF851B"},className:"fas fa-star",onClick:function(){return e.fav(t)}})),"Title: ",t.attributes.canonicalTitle),r.a.createElement("p",null,"Avrage Rating:   ",t.attributes.averageRating),r.a.createElement("p",null,"Age rating: ",t.attributes.ageRating),r.a.createElement("p",null,"Number of episodes: ",t.attributes.episodeCount),r.a.createElement("p",null,"Status: ",t.attributes.status),r.a.createElement("img",{className:"img",src:t.attributes.posterImage.medium,alt:""}),r.a.createElement("p",{className:"descHide",id:t.id+"desc"},"Synopsis: ",t.attributes.synopsis))})))}y.propTypes={animeArr:k.a.array},y.propTypes={favArr:k.a.array};var A=a(21),T=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleButtonSort=function(e){n.setState({searchType:e.target.value,searchInput:"",pgOffset:0},(function(){E(g(n.state)).then((function(e){return n.setState({searchResults:e})}))}))},n.handleSearch=Object(A.debounce)((function(){n.setState({searchInput:document.getElementById("search").value,pgOffset:0},(function(){E(g(n.state)).then((function(e){return n.setState({searchResults:e})}))}))}),1e3),n.handleMore=function(){n.setState({pgOffset:n.state.pgOffset+p.resultsNum},(function(){E(g(n.state)).then((function(e){return n.setState({searchResults:n.state.searchResults.concat(e)})}))}))},n.handleFav=function(e){if(localStorage.clear(),-1===n.state.favorites.indexOf(e)&&-1===n.state.favId.indexOf(e.id))n.setState({favorites:n.state.favorites.concat([e]),favId:n.state.favId.concat([e.id])});else{var t=n.state.favorites,a=n.state.favId;t.splice(a.indexOf(e.id),1),a.splice(a.indexOf(e.id),1),n.setState({favorites:t,favId:a})}},n.state={searchInput:"",searchType:h,searchResults:[],favorites:[],favId:[],pgOffset:0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;localStorage.length>0&&this.setState({favorites:JSON.parse(localStorage.getItem("items")),favId:JSON.parse(localStorage.getItem("ids"))}),E(g(this.state)).then((function(t){return e.setState({searchResults:t})}))}},{key:"componentDidUpdate",value:function(){this.state.favorites.length>0&&(localStorage.setItem("items",JSON.stringify(this.state.favorites)),localStorage.setItem("ids",JSON.stringify(this.state.favId)))}},{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(b,{sort:this.handleButtonSort,search:this.handleSearch}),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/SimpleAnimeSearcher"},r.a.createElement(O,{animeArr:this.state.searchResults,more:this.handleMore,fav:this.handleFav,favArr:this.state.favorites,favId:this.state.favId})),r.a.createElement(f.a,{exact:!0,path:"/SimpleAnimeSearcher/favorites"},r.a.createElement(R,{favArr:this.state.favorites,fav:this.handleFav}))))}}]),a}(r.a.Component);var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.5bdc7cee.chunk.js.map