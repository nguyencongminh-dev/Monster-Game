(function(t){function e(e){for(var n,a,o=e[0],c=e[1],l=e[2],_=0,m=[];_<o.length;_++)a=o[_],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&m.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},s={app:0},r=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"figure"},[i("div",{staticClass:"figure__item"},[t._m(0),t._m(1),i("div",{staticClass:"figure__item__HP"},[i("div",{staticClass:"figure__item__HP--percen",style:{width:t.playerHP+"%"}}),i("div",{staticClass:"figure__item__HP--percen-details"},[t._v(t._s(t.playerHP))])])]),i("div",{staticClass:"figure__item"},[t._m(2),t._m(3),i("div",{staticClass:"figure__item__HP"},[i("div",{staticClass:"figure__item__HP--percen",style:{width:t.monsterHP+"%"}}),i("div",{staticClass:"figure__item__HP--percen-details"},[t._v(t._s(t.monsterHP))])])])]),i("div",{staticClass:"action"},[t.isStart?i("div",{staticClass:"action__skill"},[i("button",{staticClass:"action__skill__item ATTACK",on:{click:t.ATTACK}},[t._v("ATTACK")]),i("button",{staticClass:"action__skill__item SPECIAL",on:{click:t.SPECIAL}},[t._v("SPECIAL ATTACK")]),i("button",{staticClass:"action__skill__item HEAL",on:{click:t.HEAL}},[t._v("HEAL")]),i("button",{staticClass:"action__skill__item GIVE_UP",on:{click:t.GIVE_UP}},[t._v("GIVE UP")])]):i("div",{staticClass:"action__start"},[i("button",{staticClass:"action__start__btn",on:{click:t.startNewGame}},[t._v("START NEW GAME")])]),t.isStart?i("div",{staticClass:"log"},[i("div",{style:{color:"red"}},[t._v(t._s(t.log[0]))]),i("div",{style:{color:"blue"}},[t._v(t._s(t.log[1]))])]):t._e()])])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"figure__item__name"},[i("h3",[t._v("You")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"figure__item__img"},[i("img",{staticClass:"figure__item__img--link",attrs:{src:"https://github.com/nguyencongminh-dev/Monster-Game/blob/master/src/assets/you.png?raw=true",alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"figure__item__name"},[i("h3",[t._v("Monster")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"figure__item__img"},[i("img",{staticClass:"figure__item__img--link",attrs:{src:"https://github.com/nguyencongminh-dev/Monster-Game/blob/master/src/assets/monster.png?raw=true",alt:""}})])}],a={name:"App",data:function(){return{isStart:!1,playerHP:50,monsterHP:50,log:["ATTACK LOG",""]}},methods:{startNewGame:function(){this.isStart=!0,this.playerHP=100,this.monsterHP=100,this.log=["ATTACK LOG",""]},ATTACK:function(){var t=this.inputDamage(3,15);this.monsterHP-=t,this.log[0]="Bạn tấn công quái vật "+t,t=this.inputDamage(3,15),this.playerHP-=t,this.log[1]="Quái vật tấn công bạn "+t,this.checkPlayerOptions()},SPECIAL:function(){var t=this.inputDamage(15,20);this.monsterHP-=t,this.log[0]="Bạn tấn công đặc biệt quái vật "+t,t=this.inputDamage(15,20),this.playerHP-=t,this.log[1]="Quái vật tấn công đặc biệt bạn "+t,this.checkPlayerOptions()},HEAL:function(){if(this.playerHP>=70)return alert("HP < 70 mới được hồi!"),!1;this.playerHP<=60?(this.playerHP+=10,this.log[0]="Bạn đã hồi 10 HP"):this.playerHP=70;var t=this.inputDamage(3,15);this.playerHP-=t,this.log[1]="Quái vật tấn công bạn khi đang bơm HP "+t},GIVE_UP:function(){this.isStart=!1,alert("Bạn đã bỏ cuộc!")},inputDamage:function(t,e){return Math.max(Math.floor(Math.random()*e)+1,t)},checkPlayerOptions:function(){var t=this;this.monsterHP<=0?(this.monsterHP=0,setTimeout((function(){confirm("You won! New game?")?t.startNewGame():t.isStart=!1}),100)):this.playerHP<=0&&(this.playerHP=0,setTimeout((function(){confirm("You lost! New game?")?t.startNewGame():t.isStart=!1}),100))}},components:{}},o=a,c=(i("034f"),i("2877")),l=Object(c["a"])(o,s,r,!1,null,null,null),u=l.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,i){}});
//# sourceMappingURL=app.5bc09517.js.map