(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){t.exports=a(22)},19:function(t,e,a){},22:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),i=a(12),r=a.n(i),c=(a(19),a(1)),o=a.n(c),d=a(7),u=a(2),p=a(3),l=a(6),h=a(4),m=a(8),f=a(5),v=a(9),k=a(13),g=a.n(k),b=function(t){function e(){return Object(u.a)(this,e),Object(l.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this.props.isMatched?"card_matched":"";return n.a.createElement("div",{className:"card card_front ".concat(t),onClick:this.props.onClick},this.props.cardFace)}}]),e}(s.Component),C=function(t){function e(){return Object(u.a)(this,e),Object(l.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"card card_back",onClick:this.props.onClick})}}]),e}(s.Component),x=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).state={isFlipped:!1},a.handleClick=a.handleClick.bind(Object(m.a)(a)),a}return Object(f.a)(e,t),Object(p.a)(e,[{key:"componentDidUpdate",value:function(t){this.props.exposed&&this.props.exposedCount>=1&&!this.props.gameEnded&&this.flip(),!this.props.gameStarted&&this.props.gameEnded&&this.state.isFlipped&&this.setState({isFlipped:!1})}},{key:"flip",value:function(){setTimeout(function(){this.setState(function(t){return{isFlipped:!t.isFlipped}})}.bind(this),600)}},{key:"handleClick",value:function(){this.state.isFlipped||(this.setState(function(t){return{isFlipped:!t.isFlipped}}),this.props.onClick(this))}},{key:"render",value:function(){return n.a.createElement("div",{className:"game-field__tile"},n.a.createElement(g.a,{isFlipped:this.state.isFlipped,flipDirection:"horizontal"},n.a.createElement(b,{key:"back",onClick:this.handleClick,cardFace:this.props.cardFace,isMatched:this.props.isMatched}),n.a.createElement(C,{key:"front",onClick:this.handleClick})))}}]),e}(s.Component),y=function(t){function e(){return Object(u.a)(this,e),Object(l.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"time-limit"},this.props.timeLeft)}}]),e}(s.Component),j=function(){function t(e,a){Object(u.a)(this,t),this.query=e,this.limit=a,this.gif=null}return Object(p.a)(t,[{key:"getGIFs",value:function(){var t=Object(d.a)(o.a.mark(function t(e,a){var s,n,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s="http://api.giphy.com/v1/gifs/search?q="+this.query+"&api_key=Gg8myGJJ00rKTsHqkNwPNlmZsV92EHJB&limit="+this.limit,t.next=3,fetch(s);case 3:return n=t.sent,t.next=6,n.json();case 6:return i=t.sent,t.abrupt("return",i.data);case 8:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}()},{key:"setGifURL",value:function(){var t=Object(d.a)(o.a.mark(function t(){var e,a,s,n,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.getRandomImage(),t.next=3,this.getGIFs(this.query,this.limit);case 3:a=t.sent,s=a[e],console.log(s),n=s.images.original.url,i=s.title,this.gifURL=n,this.gif={src:n,alt:i};case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"getRandomImage",value:function(){return Math.floor(this.limit*Math.random())}}]),t}(),E=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).state={gameEnded:!1,gif:{src:"",alt:""}},a.handleClick=a.handleClick.bind(Object(m.a)(a)),a}return Object(f.a)(e,t),Object(p.a)(e,[{key:"componentDidUpdate",value:function(t){t.gameEnded!==this.props.gameEnded&&!0===this.props.gameEnded&&this.setState({gameEnded:!0}),this.state.gameEnded&&(this.getGif(),this.setState({gameEnded:!1}))}},{key:"handleClick",value:function(){this.props.onButtonClick()}},{key:"renderOutcome",value:function(){return"win"===this.props.outcome?"Epic Win!":"lose"===this.props.outcome?"Not Epic Win :(":void 0}},{key:"getGif",value:function(){var t=Object(d.a)(o.a.mark(function t(){var e,a,s,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e="",a="","win"!==this.props.outcome){t.next=8;break}return s=new j("win",10),t.next=6,s.setGifURL();case 6:e=s.gif.src,a=s.gif.alt;case 8:if("lose"!==this.props.outcome){t.next=14;break}return n=new j("fail",10),t.next=12,n.setGifURL();case 12:e=n.gif.src,a=n.gif.alt;case 14:this.setState({gif:{src:e,alt:a}});case 15:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.props.gameEnded?"modal_show":"";return n.a.createElement("div",{className:"modal ".concat(t)},n.a.createElement("div",{className:"game-results"},n.a.createElement("h2",{className:"game-results__title"},this.renderOutcome()),n.a.createElement("div",{className:"game-results__gif"},n.a.createElement("img",{src:this.state.gif.src,alt:this.state.gif.alt})),n.a.createElement("button",{className:"game-results__button",type:"button",onClick:this.handleClick},"New Game")))}}]),e}(s.Component),O={totalCards:12,cards:["\ud83d\udc36","\ud83d\udc36","\ud83d\udc31","\ud83d\udc31","\ud83d\udc2d","\ud83d\udc2d","\ud83d\udc39","\ud83d\udc39","\ud83d\udc30","\ud83d\udc30","\ud83d\udc3b","\ud83d\udc3b"],timeLimit:20},w=function(t){function e(){var t,a;Object(u.a)(this,e);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(a=Object(l.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(n)))).state={gameStarted:!1,gameEnded:!1,cardsLeft:O.totalCards,timeLeft:O.timeLimit,faces:Object(v.shuffle)(O.cards),cardsData:{},cards:[],exposedCount:0,exposedCards:[],outcome:""},a.initNewGame=Object(d.a)(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.setState({gameStarted:!1}),a.setState({gameEnded:!1}),a.setState({outcome:""}),a.setState({timeLeft:O.timeLimit}),a.setState({cardsLeft:O.totalCards}),a.setState({faces:Object(v.shuffle)(O.cards)}),t.next=8,a.getCardsData(a.state.faces);case 8:e=t.sent,a.setState({cardsData:e}),a.setState({cards:a.getCardComponents(e)});case 11:case"end":return t.stop()}},t)})),a.onCardClick=function(){var t=Object(d.a)(o.a.mark(function t(e){var s,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.state.gameStarted||a.state.gameEnded){t.next=3;break}return t.next=3,a.runGame();case 3:return a.state.exposedCards.push(e),a.markAsExposed(e.props.id),t.next=7,a.setState({exposedCount:a.state.exposedCount+1});case 7:2===a.state.exposedCount&&(s=a.state.exposedCards[0],n=a.state.exposedCards[1],s.props.cardFace===n.props.cardFace?a.markAsMatched(s.props.id,n.props.id):a.switchExposed(s.props.id,n.props.id),a.setState({exposedCount:0,exposedCards:[]}));case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),a.onButtonClick=function(){var t=Object(d.a)(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.setState({gameStarted:!1});case 2:return t.next=4,a.update(a.state.cardsData);case 4:setTimeout(function(){this.initNewGame()}.bind(Object(m.a)(a)),200);case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),a}return Object(f.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){this.initNewGame()}},{key:"getCardsData",value:function(t){for(var e={},a=0;a<t.length;a++)e[a]={id:a,cardFace:t[a],isMatched:!1,exposed:!1};return e}},{key:"getCardComponents",value:function(t){var e=[];for(var a in t){var s=t[a];e.push(n.a.createElement(x,{key:s.id,id:s.id,cardFace:s.cardFace,isMatched:s.isMatched,exposed:s.exposed,onClick:this.onCardClick,exposedCount:this.state.exposedCount,gameStarted:this.state.gameStarted,gameEnded:this.state.gameEnded}))}return e}},{key:"markAsMatched",value:function(t,e){var a=this.state.cardsData;a[t].isMatched=!0,a[e].isMatched=!0,this.setState({cardsLeft:this.state.cardsLeft-2}),this.update(a)}},{key:"markAsExposed",value:function(t){var e=this.state.cardsData;e[t].exposed=!0,this.update(e)}},{key:"switchExposed",value:function(t,e){var a=this.state.cardsData;a[t].exposed=!a[t].exposed,a[e].exposed=!a[e].exposed,this.update(a)}},{key:"runGame",value:function(){this.setState({gameStarted:!0});var t=setInterval(function(){this.setState({timeLeft:this.state.timeLeft-1}),(this.state.timeLeft<=0||0===this.state.cardsLeft)&&(this.endGame(),clearInterval(t))}.bind(this),1e3)}},{key:"endGame",value:function(){0===this.state.cardsLeft?this.setState({outcome:"win"}):this.setState({outcome:"lose"}),this.setState({gameEnded:!0}),this.setState({exposedCount:0}),this.setState({exposedCards:[]}),this.update(this.state.cardsData)}},{key:"update",value:function(){var t=Object(d.a)(o.a.mark(function t(e){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getCardComponents(e);case 2:a=t.sent,this.setState({cards:a});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"game-name"},"Memoji"),n.a.createElement(E,{gameEnded:this.state.gameEnded,outcome:this.state.outcome,onButtonClick:this.onButtonClick}),n.a.createElement("div",{className:"game-field"},this.state.cards),n.a.createElement(y,{gameStarted:this.state.gameStarted,timeLeft:this.state.timeLeft}))}}]),e}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.4532b93b.chunk.js.map