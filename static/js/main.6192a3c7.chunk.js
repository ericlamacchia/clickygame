(this["webpackJsonpclick-app"]=this["webpackJsonpclick-app"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Harry Potter","image":"https://vignette.wikia.nocookie.net/harry-potter/images/d/d6/1C2EEF5D-02A6-4435-B1EF-0C623C04193C.png/revision/latest?cb=20190814171025","count":0},{"id":2,"name":"Hermoine Grainger","image":"https://images.ctfassets.net/usf1vwtuqyxm/7xdaPxOL4cYmI4YusoYgKY/6e64803c91a26ea0069ad0fbcd7c9ace/HermioneGranger_WB_F6_HermioneGrangerFullbody_V2_Promo_0801615_Port.jpg","count":0},{"id":3,"name":"Ron Weasley","image":"https://i2-prod.irishmirror.ie/incoming/article13411844.ece/ALTERNATES/s615b/2_RUPERT-GRINT-as-Ron-Weasley.jpg","count":0},{"id":4,"name":"Dumbledore","image":"https://vignette.wikia.nocookie.net/harrypotter/images/4/40/Albus_Dumbledore_%28HBP_promo%29_3.jpg/revision/latest/scale-to-width-down/2000?cb=20150822232849","count":0},{"id":5,"name":"Ginny Weasley","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPBp1SbPBi4_PpBq7aPZNS6-hZTGjd8KmVQh-mraVnti4cjzlP&s","count":0},{"id":6,"name":"Dobby","image":"https://a.wattpad.com/cover/113260777-288-k886907.jpg","count":0},{"id":7,"name":"George Weasley","image":"https://akns-images.eonline.com/eol_images/Entire_Site/2013624/rs_634x1024-130724114836-634.harry.cm.72413.jpg","count":0},{"id":8,"name":"Fred Weasley","image":"https://vignette.wikia.nocookie.net/p__/images/9/90/Fred_HS_TDH_promo.jpg/revision/latest?cb=20170904165912&path-prefix=protagonist","count":0},{"id":9,"name":"Sirius Black","image":"https://i.pinimg.com/originals/1a/8b/8b/1a8b8b370932c9162c69be8e39e950ea.jpg","count":0},{"id":10,"name":"Remus Lupin","image":"https://i.pinimg.com/originals/40/81/4e/40814ec57a2de67c01c0f3b64e3c6c38.jpg","count":0},{"id":11,"name":"Hedwig","image":"https://vignette.wikia.nocookie.net/harrypotter/images/1/1e/Hedwig_Snowy_Owl_PM.png/revision/latest?cb=20161123234010","count":0},{"id":12,"name":"Crookshanks","image":"https://images.ctfassets.net/usf1vwtuqyxm/1VewXrez2U26IIaOUOm0Uo/9257ef81ac9e419a0ec9560d5b50fa8f/WB_F3_Crookshanks_SOLOcrop_C240_51_UP_HPE3.jpg?w=914","count":0}]')},,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(3),o=a.n(c),r=a(4),s=a(5),m=a(7),u=a(6),g=a(8),l=(a(14),function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.clickCount(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))}),d=(a(15),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),p=(a(16),function(e){return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"title"},e.children),i.a.createElement("div",{className:"scores"},"Score: ",e.score," Highscore: ",e.highscore))}),h=a(1),f=(a(17),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={cards:h,score:0,highscore:0},a.gameOver=function(){return a.state.score>a.state.highscore&&a.setState({highscore:a.state.score},(function(){console.log(this.state.highscore)})),a.state.cards.forEach((function(e){e.count=0})),alert("Game Over :( \nscore: ".concat(a.state.score)),a.setState({score:0}),!0},a.clickCount=function(e){a.state.cards.find((function(t,n){if(t.id===e){if(0===h[n].count)return h[n].count=h[n].count+1,a.setState({score:a.state.score+1},(function(){console.log(this.state.score)})),a.state.cards.sort((function(){return Math.random()-.5})),!0;a.gameOver()}}))},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(d,null,i.a.createElement(p,{score:this.state.score,highscore:this.state.highscore},"Clicky Game"),this.state.cards.map((function(t){return i.a.createElement(l,{clickCount:e.clickCount,id:t.id,key:t.id,image:t.image})})))}}]),t}(n.Component));a(18);o.a.render(i.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.6192a3c7.chunk.js.map