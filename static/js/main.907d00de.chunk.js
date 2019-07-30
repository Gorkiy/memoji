(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(22)},19:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(12),r=a.n(i),c=(a(19),a(1)),o=a.n(c),d=a(7),u=a(2),p=a(3),l=a(6),h=a(4),m=a(8),f=a(5),v=a(9),k=a(13),g=a.n(k),b=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.isMatched?"card_matched":"";return n.a.createElement("div",{className:"card card_front ".concat(e),onClick:this.props.onClick},this.props.cardFace)}}]),t}(s.Component),C=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"card card_back",onClick:this.props.onClick})}}]),t}(s.Component),x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={isFlipped:!1},a.handleClick=a.handleClick.bind(Object(m.a)(a)),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.exposed&&this.props.exposedCount>=1&&!this.props.gameEnded&&this.flip(),!this.props.gameStarted&&this.props.gameEnded&&this.state.isFlipped&&this.setState({isFlipped:!1})}},{key:"flip",value:function(){setTimeout(function(){this.setState(function(e){return{isFlipped:!e.isFlipped}})}.bind(this),600)}},{key:"handleClick",value:function(){this.state.isFlipped||(this.setState(function(e){return{isFlipped:!e.isFlipped}}),this.props.onClick(this))}},{key:"render",value:function(){return n.a.createElement("div",{className:"game-field__tile"},n.a.createElement(g.a,{isFlipped:this.state.isFlipped,flipDirection:"horizontal"},n.a.createElement(b,{key:"back",onClick:this.handleClick,cardFace:this.props.cardFace,isMatched:this.props.isMatched}),n.a.createElement(C,{key:"front",onClick:this.handleClick})))}}]),t}(s.Component),y=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"time-limit"},this.props.timeLeft)}}]),t}(s.Component),j=function(){function e(t,a){Object(u.a)(this,e),this.query=t,this.limit=a,this.gif=null}return Object(p.a)(e,[{key:"getGIFs",value:function(){var e=Object(d.a)(o.a.mark(function e(t,a){var s,n,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s="//api.giphy.com/v1/gifs/search?q="+this.query+"&api_key=Gg8myGJJ00rKTsHqkNwPNlmZsV92EHJB&limit="+this.limit,e.next=3,fetch(s);case 3:return n=e.sent,e.next=6,n.json();case 6:return i=e.sent,e.abrupt("return",i.data);case 8:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"setGifURL",value:function(){var e=Object(d.a)(o.a.mark(function e(){var t,a,s,n,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getRandomImage(),e.next=3,this.getGIFs(this.query,this.limit);case 3:a=e.sent,s=a[t],console.log(s),n=s.images.original.url,i=s.title,this.gifURL=n,this.gif={src:n,alt:i};case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getRandomImage",value:function(){return Math.floor(this.limit*Math.random())}}]),e}(),E=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={gameEnded:!1,gif:{src:"",alt:""}},a.handleClick=a.handleClick.bind(Object(m.a)(a)),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e){e.gameEnded!==this.props.gameEnded&&!0===this.props.gameEnded&&this.setState({gameEnded:!0}),this.state.gameEnded&&(this.getGif(),this.setState({gameEnded:!1}))}},{key:"handleClick",value:function(){this.props.onButtonClick()}},{key:"renderOutcome",value:function(){return"win"===this.props.outcome?"Epic Win!":"lose"===this.props.outcome?"Not Epic Win :(":void 0}},{key:"getGif",value:function(){var e=Object(d.a)(o.a.mark(function e(){var t,a,s,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t="",a="","win"!==this.props.outcome){e.next=8;break}return s=new j("win",10),e.next=6,s.setGifURL();case 6:t=s.gif.src,a=s.gif.alt;case 8:if("lose"!==this.props.outcome){e.next=14;break}return n=new j("fail",10),e.next=12,n.setGifURL();case 12:t=n.gif.src,a=n.gif.alt;case 14:this.setState({gif:{src:t,alt:a}});case 15:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.gameEnded?"modal_show":"";return n.a.createElement("div",{className:"modal ".concat(e)},n.a.createElement("div",{className:"game-results"},n.a.createElement("h2",{className:"game-results__title"},this.renderOutcome()),n.a.createElement("div",{className:"game-results__gif"},n.a.createElement("img",{src:this.state.gif.src,alt:this.state.gif.alt})),n.a.createElement("button",{className:"game-results__button",type:"button",onClick:this.handleClick},"New Game")))}}]),t}(s.Component),O={totalCards:12,cards:["\ud83d\udc36","\ud83d\udc36","\ud83d\udc31","\ud83d\udc31","\ud83d\udc2d","\ud83d\udc2d","\ud83d\udc39","\ud83d\udc39","\ud83d\udc30","\ud83d\udc30","\ud83d\udc3b","\ud83d\udc3b"],timeLimit:20},w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={gameStarted:!1,gameEnded:!1,cardsLeft:O.totalCards,timeLeft:O.timeLimit,faces:Object(v.shuffle)(O.cards),cardsData:{},cards:[],exposedCount:0,exposedCards:[],outcome:""},a.initNewGame=Object(d.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({gameStarted:!1}),a.setState({gameEnded:!1}),a.setState({outcome:""}),a.setState({timeLeft:O.timeLimit}),a.setState({cardsLeft:O.totalCards}),a.setState({faces:Object(v.shuffle)(O.cards)}),e.next=8,a.getCardsData(a.state.faces);case 8:t=e.sent,a.setState({cardsData:t}),a.setState({cards:a.getCardComponents(t)});case 11:case"end":return e.stop()}},e)})),a.onCardClick=function(){var e=Object(d.a)(o.a.mark(function e(t){var s,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.state.gameStarted||a.state.gameEnded){e.next=3;break}return e.next=3,a.runGame();case 3:return a.state.exposedCards.push(t),a.markAsExposed(t.props.id),e.next=7,a.setState({exposedCount:a.state.exposedCount+1});case 7:2===a.state.exposedCount&&(s=a.state.exposedCards[0],n=a.state.exposedCards[1],s.props.cardFace===n.props.cardFace?a.markAsMatched(s.props.id,n.props.id):a.switchExposed(s.props.id,n.props.id),a.setState({exposedCount:0,exposedCards:[]}));case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onButtonClick=function(){var e=Object(d.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({gameStarted:!1});case 2:return e.next=4,a.update(a.state.cardsData);case 4:setTimeout(function(){this.initNewGame()}.bind(Object(m.a)(a)),200);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.initNewGame()}},{key:"getCardsData",value:function(e){for(var t={},a=0;a<e.length;a++)t[a]={id:a,cardFace:e[a],isMatched:!1,exposed:!1};return t}},{key:"getCardComponents",value:function(e){var t=[];for(var a in e){var s=e[a];t.push(n.a.createElement(x,{key:s.id,id:s.id,cardFace:s.cardFace,isMatched:s.isMatched,exposed:s.exposed,onClick:this.onCardClick,exposedCount:this.state.exposedCount,gameStarted:this.state.gameStarted,gameEnded:this.state.gameEnded}))}return t}},{key:"markAsMatched",value:function(e,t){var a=this.state.cardsData;a[e].isMatched=!0,a[t].isMatched=!0,this.setState({cardsLeft:this.state.cardsLeft-2}),this.update(a)}},{key:"markAsExposed",value:function(e){var t=this.state.cardsData;t[e].exposed=!0,this.update(t)}},{key:"switchExposed",value:function(e,t){var a=this.state.cardsData;a[e].exposed=!a[e].exposed,a[t].exposed=!a[t].exposed,this.update(a)}},{key:"runGame",value:function(){this.setState({gameStarted:!0});var e=setInterval(function(){this.setState({timeLeft:this.state.timeLeft-1}),(this.state.timeLeft<=0||0===this.state.cardsLeft)&&(this.endGame(),clearInterval(e))}.bind(this),1e3)}},{key:"endGame",value:function(){0===this.state.cardsLeft?this.setState({outcome:"win"}):this.setState({outcome:"lose"}),this.setState({gameEnded:!0}),this.setState({exposedCount:0}),this.setState({exposedCards:[]}),this.update(this.state.cardsData)}},{key:"update",value:function(){var e=Object(d.a)(o.a.mark(function e(t){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCardComponents(t);case 2:a=e.sent,this.setState({cards:a});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"game-name"},"Memoji"),n.a.createElement(E,{gameEnded:this.state.gameEnded,outcome:this.state.outcome,onButtonClick:this.onButtonClick}),n.a.createElement("div",{className:"game-field"},this.state.cards),n.a.createElement(y,{gameStarted:this.state.gameStarted,timeLeft:this.state.timeLeft}))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.907d00de.chunk.js.map