webpackJsonp([0],{71:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(83),r=e(90),i=e(5),n=i(s.a,r.a,!1,null,null,null);a.default=n.exports},75:function(t,a,e){"use strict";a.a={data:function(){return{message:""}}}},76:function(t,a,e){"use strict";var s=e(75),r=e(77),i=e(5),n=i(s.a,r.a,!1,null,null,null);a.a=n.exports},77:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form",attrs:{id:"form"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"text-center text-md-left col-lg-6 mb-5 mb-lg-0 d-flex justify-content-center align-items-center"},[e("div",[e("h2",{staticClass:"mb-4"},[t._v("Оствьте заявку")]),t._v(" "),e("h5",[t._v("Если у вас есть вопросы или вы хотите обсудить ваш заказ, оставьте "),e("br"),t._v(" нам ваш номер телефона или Email и мы\n            "),e("br"),t._v(" свяжемся с вами.")])])]),t._v(" "),e("div",{staticClass:"col-lg-6 d-flex justify-content-center align-items-center"},[e("div",[e("form",{attrs:{action:"https://formspree.io/rus131354@icloud.com",method:"post"}},[e("div",{staticClass:"d-none d-md-block"},[e("label",{attrs:{for:"pole"}},[t._v("Номер телефона или Email")]),t._v(" "),e("div",{staticClass:"input-group mb-3"},[e("input",{staticClass:"form-control",attrs:{id:"pole",name:"message",type:"text",placeholder:"+7 123 456 78 90","aria-describedby":"basic-addon2"}}),t._v(" "),e("div",{staticClass:"input-group-append pl-1"},[e("button",[t._v("Оставить заявку")])])])]),t._v(" "),e("div",{staticClass:"d-block d-md-none"},[e("label",{attrs:{for:"pole"}},[t._v("Номер телефона или Email")]),t._v(" "),e("input",{staticClass:"form-control rounded-0",attrs:{id:"pole",name:"message",type:"text",placeholder:"+7 123 456 78 90","aria-describedby":"basic-addon2"}}),t._v(" "),e("button",{staticClass:"p-3 w-100 rounded-0"},[t._v("Оставить заявку")])])])])])])])])}],i={render:s,staticRenderFns:r};a.a=i},78:function(t,a,e){"use strict";a.a={props:{cardData:{header:"",list:[],price:"",link:"",required:!0}}}},79:function(t,a,e){"use strict";function s(t){e(80)}var r=e(78),i=e(82),n=e(5),c=s,l=n(r.a,i.a,!1,c,"data-v-1b6369cc",null);a.a=l.exports},80:function(t,a,e){var s=e(81);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(7)("565b13da",s,!0,{})},81:function(t,a,e){a=t.exports=e(6)(!1),a.push([t.i,"",""])},82:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card p-3"},[e("div",{staticClass:"card__header pt-5 p-3 text-center"},[e("h4",[t._v(t._s(t.cardData.header))])]),t._v(" "),e("div",{staticClass:"card__body"},[t._l(t.cardData.list,function(a){return e("p",[e("i",{staticClass:"fa fa-circle mr-3"}),t._v(" "+t._s(a))])}),t._v(" "),e("a",{staticClass:"btn btn-main price position-absolute text-uppercase shadow-none",attrs:{href:t.cardData.link}},[t._v(t._s(t.cardData.price))])],2)])},r=[],i={render:s,staticRenderFns:r};a.a=i},83:function(t,a,e){"use strict";var s=e(79),r=e(88),i=e(76);a.a={components:{card:s.a,promo:r.a,MainForm:i.a},data:function(){return{card1:{header:"Визитка",list:["Индивидульный дизайн","Счетчик просмотров"],link:"#form",price:"от 5.000 тг"},card2:{header:"Лендинг",list:["Индивидульный дизайн","Админ панель"],link:"#form",price:"от 10.000 тг"},card3:{header:"Магазин",list:["Индивидульный дизайн","Админ панель","Техническая поддержка"],link:"#form",price:"от 30.000 тг"}}}}},84:function(t,a,e){"use strict";a.a={}},88:function(t,a,e){"use strict";var s=e(84),r=e(89),i=e(5),n=i(s.a,r.a,!1,null,null,null);a.a=n.exports},89:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"promo"},[e("div",{staticClass:"header__content container"},[e("div",{staticClass:"header__promo text-center text-md-left"},[e("h1",{staticClass:"mb-5"},[t._v("Bulvez Studio")]),t._v(" "),t._m(0),t._v(" "),e("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#form",expression:"'#form'"}],staticClass:"btn btn-main"},[t._v("Оставить заявку")])])])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h4",{staticClass:"mb-5"},[t._v("\n        Самые качетсвенные и дсотупные "),e("br"),t._v(" веб-приложения в Казахстане\n      ")])}],i={render:s,staticRenderFns:r};a.a=i},90:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("promo"),t._v(" "),e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"block"},[e("div",{staticClass:"d-flex justify-content-around flex-wrap mb-5"},[e("card",{attrs:{"card-data":t.card1}}),t._v(" "),e("card",{attrs:{"card-data":t.card2}}),t._v(" "),e("card",{attrs:{"card-data":t.card3}})],1),t._v(" "),e("div",{staticClass:"text-center"},[e("p",{staticClass:"mb-5"},[t._v("Если вы хотите добавть любой ваш функционал или не знаете с чего и как начать, свяжитесь с нами 24/7")]),t._v(" "),e("router-link",{staticClass:"btn btn-main",attrs:{to:"/services"}},[t._v("Полный список услуг")])],1)])]),t._v(" "),t._m(1),t._v(" "),e("main-form")],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"block text-center"},[e("h2",{staticClass:"mb-5"},[t._v("Почему Мы?")]),t._v(" "),e("p",[t._v("\n        Большой опыт в создании веб-приложений, самые низкие цены. Мы создатели обучающего IT  портала BulveyzCasts, портала для управления структурой колледжей Wingeter, облачных хранилищ и других крупных проектов. Почему так дешево? Потому что мы живём в 21 веке, в наше время у каждого предприятия должен быть свой собственный сайт, но из-за цен у некоторых нет возможности тратиться на создание веб-приложений, мы решили убрать “флешмоб высоких цен”  на сайты. Мы выполним сайт с любым функционалом и любого уровня сложности по самым адекватным ценам.\n      ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"text-center position-relative"},[s("div",{staticClass:"overlay"}),t._v(" "),s("h2",[t._v("Что мы используем")]),t._v(" "),s("img",{staticClass:"img-fluid w-100",attrs:{src:e(91),alt:""}})])}],i={render:s,staticRenderFns:r};a.a=i},91:function(t,a,e){t.exports=e.p+"group.svg?eaa4e4d268d99fa8746eedfb1c2f9317"}});
//# sourceMappingURL=0.build.js.map