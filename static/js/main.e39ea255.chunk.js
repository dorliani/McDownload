(this.webpackJsonpmcdownload=this.webpackJsonpmcdownload||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return a})),n.d(t,"p",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"m",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return m})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return b})),n.d(t,"o",(function(){return _}));var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",c="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",s="PURCHASE_INIT",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",m="FETCH_ORDERS_FAIL",h="AUTH_START",f="AUTH_SUCCESS",g="AUTH_FAIL",b=" AUTH_LOGOUT",_="SET_AUTH_REDIRECT_PATH"},,function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(18),a=function(e,t){return Object(r.a)(Object(r.a)({},e),t)},o=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"f",(function(){return f})),n.d(t,"j",(function(){return _})),n.d(t,"c",(function(){return E}));var r=n(1),a=n(19),o=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.n,ingredientName:e}},c=function(){return function(e){a.a.get("https://mc-download-ce230.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){e({type:r.f})}))}},u=n(18),l=function(e,t){return function(n){n({type:r.k}),a.a.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:r.j,error:e}}(e))}))}},s=function(){return{type:r.m}},d=function(e,t){return function(n){n({type:r.h});var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("/orders.json"+o).then((function(e){var t,a=[];for(var o in e.data)a.push(Object(u.a)(Object(u.a)({},e.data[o]),{},{id:o}));n((t=a,{type:r.i,orders:t}))})).catch((function(e){var t;n((t=e,{type:r.g,error:t}))}))}},p=n(31),m=n.n(p),h=function(e,t){return{type:r.e,idToken:e,userId:t}},f=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},g=function(e){return function(t){setTimeout((function(){t(f())}),1e3*e)}},b=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA58nrqbZzwHv5wNWPzGLP_giEIiuaCAic";n||(i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA58nrqbZzwHv5wNWPzGLP_giEIiuaCAic"),m.a.post(i,o).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(h(e.data.idToken,e.data.localId)),a(g(e.data.expiresIn))})).catch((function(e){var t;a((t=e.response.data.error,{type:r.b,error:t}))}))}},_=function(e){return{type:r.o,path:e}},E=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(f());else{var r=localStorage.getItem("userId");e(h(t,r)),e(g((n.getTime()-(new Date).getTime())/1e3))}}else e(f())}}},function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__12NsT",BreadTop:"BurgerIngredient_BreadTop__Hd43_",Seeds1:"BurgerIngredient_Seeds1__1cesO",Seeds2:"BurgerIngredient_Seeds2__2U_rq",Meat:"BurgerIngredient_Meat__34nvF",Cheese:"BurgerIngredient_Cheese__MSiz6",Salad:"BurgerIngredient_Salad__2AD0a",Bacon:"BurgerIngredient_Bacon__2slH5"}},,function(e,t,n){"use strict";var r=n(31),a=n.n(r).a.create({baseURL:"https://mc-download-ce230.firebaseio.com/"});t.a=a},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__7V4U7",Open:"SideDrawer_Open__22gmr",Close:"SideDrawer_Close__2p2V9",Logo:"SideDrawer_Logo__3rT7d"}},,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__197bd",Label:"BuildControl_Label__zrMhM",Less:"BuildControl_Less__1A78g",More:"BuildControl_More__h3YQc"}},,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(59),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(5),a=n(6),o=n(8),i=n(7),c=n(0),u=n.n(c),l=n(62),s=n.n(l),d=n(11),p=n(29),m=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return u.a.createElement(d.a,null,u.a.createElement(p.a,{show:this.props.show,clicked:this.props.modalClosed}),u.a.createElement("div",{className:s.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),n}(c.Component);t.a=m},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__2mfwQ",Logo:"Toolbar_Logo__2Zpj3",DesktopOnly:"Toolbar_DesktopOnly__1UKSR"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(40),i=n.n(o);t.a=function(e){return a.a.createElement("button",{className:[i.a.Button,i.a[e.btnType]].join(" "),disabled:e.disabled,onClick:e.clicked},e.children)}},,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__PBbqt",active:"NavigationItem_active__13rVM"}},,,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__2d_UQ",OrderButton:"BuildControls_OrderButton__1Qj9j",enable:"BuildControls_enable__33cqB"}},function(e,t,n){e.exports={Button:"Button_Button__3ZOPk",Success:"Button_Success__1cdEZ",Danger:"Button_Danger__3VWkC"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(63),i=n.n(o);t.a=function(){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(5),a=n(6),o=n(8),i=n(7),c=n(0),u=n.n(c),l=n(30),s=n(11);t.a=function(e,t){return function(n){Object(o.a)(d,n);var c=Object(i.a)(d);function d(){var e;Object(r.a)(this,d);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=c.call.apply(c,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(a.a)(d,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return u.a.createElement(s.a,null,u.a.createElement(l.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),u.a.createElement(e,this.props))}}]),d}(c.Component)}},,,,,,,,,,,function(e,t,n){"use strict";var r=n(65),a=n(0),o=n.n(a),i=n(61),c=n.n(i),u=n(5),l=n(6),s=n(8),d=n(7),p=n(17),m=n.n(p),h=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:m.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:m.a.BreadTop},o.a.createElement("div",{className:m.a.Seeds1}),o.a.createElement("div",{className:m.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:m.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:m.a.Cheese});break;case"salad":e=o.a.createElement("div",{className:m.a.Salad});break;case"bacon":e=o.a.createElement("div",{className:m.a.Bacon});break;default:e=null}return e}}]),n}(a.Component);t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return o.a.createElement(h,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please start adding ingredients!")),o.a.createElement("div",{className:c.a.Burger},o.a.createElement(h,{type:"bread-top"}),t,o.a.createElement(h,{type:"bread-bottom"}))}},function(e,t,n){e.exports={Content:"Layout_Content__3CzKF"}},function(e,t,n){e.exports=n.p+"static/media/logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__2QTPm"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__v0qUD"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__2A86i"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__1ZnTU"}},,function(e,t,n){e.exports={Burger:"Burger_Burger__37avr"}},function(e,t,n){e.exports={Modal:"Modal_Modal__3BxHX"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__2XCZz",load3:"Spinner_load3__3TW0k"}},,,function(e,t,n){e.exports=n(95)},,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(27),i=n.n(o),c=(n(71),n(5)),u=n(6),l=n(8),s=n(7),d=(n(72),n(11)),p=n(54),m=n.n(p),h=n(32),f=n.n(h),g=n(55),b=n.n(g),_=n(56),E=n.n(_),v=function(e){return a.a.createElement("div",{className:E.a.Logo,style:{height:e.height}},a.a.createElement("img",{src:b.a,alt:"MyBurger"}))},O=n(57),y=n.n(O),j=n(35),S=n.n(j),k=n(21),C=function(e){return a.a.createElement("li",{className:S.a.NavigationItem},a.a.createElement(k.b,{to:e.link,exact:e.exact,activeClassName:S.a.active},e.children))},w=function(e){return a.a.createElement("ul",{className:y.a.NavigationItems},a.a.createElement(C,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?a.a.createElement(C,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(C,{link:"/logout"},"Logout"):a.a.createElement(C,{link:"/auth"},"Authenticate"))},I=n(58),T=n.n(I),N=function(e){return a.a.createElement("div",{className:T.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},B=function(e){return a.a.createElement("header",{className:f.a.Toolbar},a.a.createElement(N,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:f.a.Logo},a.a.createElement(v,null)),a.a.createElement("nav",{className:f.a.DesktopOnly},a.a.createElement(w,{isAuthenticated:e.isAuth})))},D=n(23),A=n.n(D),R=n(29),L=function(e){var t=[A.a.SideDrawer,A.a.Close];return e.open&&(t=[A.a.SideDrawer,A.a.Open]),a.a.createElement(d.a,null,a.a.createElement(R.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:A.a.Logo},a.a.createElement(v,null)),a.a.createElement("nav",null,a.a.createElement(w,{isAuthenticated:e.isAuth}))))},P=n(15),H=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(d.a,null,a.a.createElement(B,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(L,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:m.a.Content},this.props.children))}}]),n}(r.Component),x=Object(P.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(H),U=n(18),M=n(53),z=n(39),q=n.n(z),F=n(26),W=n.n(F),G=function(e){return a.a.createElement("div",{className:W.a.BuildControl},a.a.createElement("div",{className:W.a.Label},e.label),a.a.createElement("button",{className:W.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:W.a.More,onClick:e.added},"More"))},V=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],Z=function(e){return a.a.createElement("div",{className:q.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))),V.map((function(t){return a.a.createElement(G,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:q.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},K=n(30),Q=n(33),X=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])}));return a.a.createElement(d.a,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(Q.a,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),a.a.createElement(Q.a,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),n}(r.Component),Y=n(41),$=n(42),J=n(16),ee=n(19),te=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={purchasing:!1},e.purchaseHandler=function(){e.props.isAuthenticated?e.setState({purchasing:!0}):(e.props.onSetAuthRedirectPath("/checkout"),e.props.history.push("/auth"))},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.onInitPurchase(),e.props.history.push("/checkout")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(U.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null,"Ingredients can't be loaded!"):a.a.createElement(Y.a,null);return this.props.ings&&(r=a.a.createElement(d.a,null,a.a.createElement(M.a,{ingredients:this.props.ings}),a.a.createElement(Z,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated,price:this.props.price})),n=a.a.createElement(X,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),a.a.createElement(d.a,null,a.a.createElement(K.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),n}(r.Component),ne=Object(P.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(J.a(t))},onIngredientRemoved:function(t){return e(J.i(t))},onInitIngredients:function(){return e(J.e())},onInitPurchase:function(){return e(J.h())},onSetAuthRedirectPath:function(t){return e(J.j(t))}}}))(Object($.a)(te,ee.a)),re=n(4),ae=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(re.a,{to:"/"})}}]),n}(r.Component),oe=Object(P.b)(null,(function(e){return{onLogout:function(){return e(J.f())}}}))(ae),ie=function(e){return function(t){Object(l.a)(r,t);var n=Object(s.a)(r);function r(){var e;Object(c.a)(this,r);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={component:null},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),r}(r.Component)},ce=ie((function(){return n.e(3).then(n.bind(null,103))})),ue=ie((function(){return n.e(5).then(n.bind(null,104))})),le=ie((function(){return n.e(4).then(n.bind(null,102))})),se=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(re.d,null,a.a.createElement(re.b,{path:"/auth",component:le}),a.a.createElement(re.b,{path:"/",exact:!0,component:ne}),a.a.createElement(re.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(re.d,null,a.a.createElement(re.b,{path:"/checkout",component:ce}),a.a.createElement(re.b,{path:"/auth",component:le}),a.a.createElement(re.b,{path:"/orders",component:ue}),a.a.createElement(re.b,{path:"/logout",component:oe}),a.a.createElement(re.b,{path:"/",exact:!0,component:ne}),a.a.createElement(re.a,{to:"/"}))),a.a.createElement("div",null,a.a.createElement(x,null,e))}}]),n}(r.Component),de=Object(re.g)(Object(P.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e(J.c())}}}))(se));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=n(20),me=n(24),he=n(1),fe=n(3),ge={ingredients:null,totalPrice:4,error:!1,building:!1},be={salad:.5,cheese:.4,meat:1.3,bacon:.7},_e=function(e,t){var n=Object(me.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(fe.b)(e.ingredients,n),totalPrice:e.totalPrice+be[t.ingredientName],building:!0};return Object(fe.b)(e,r)},Ee=function(e,t){var n=Object(me.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(fe.b)(e.ingredients,n),totalPrice:e.totalPrice-be[t.ingredientName],building:!0};return Object(fe.b)(e,r)},ve=function(e,t){return Object(fe.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})},Oe=function(e,t){return Object(fe.b)(e,{error:!0})},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he.a:return _e(e,t);case he.n:return Ee(e,t);case he.p:return ve(e,t);case he.f:return Oe(e);default:return e}},je=n(64),Se={orders:[],loading:!1,purchased:!1},ke=function(e,t){return Object(fe.b)(e,{purchased:!1})},Ce=function(e,t){return Object(fe.b)(e,{loading:!0})},we=function(e,t){var n=Object(fe.b)(t.orderData,{id:t.orderId});return Object(fe.b)(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})},Ie=function(e,t){return Object(fe.b)(e,{loading:!1})},Te=function(e,t){return Object(fe.b)(e,{loading:!0})},Ne=function(e,t){return Object(fe.b)(e,{orders:t.orders,loading:!1})},Be=function(e,t){return Object(fe.b)(e,{loading:!1})},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he.m:return ke(e);case he.k:return Ce(e);case he.l:return we(e,t);case he.j:return Ie(e);case he.h:return Te(e);case he.i:return Ne(e,t);case he.g:return Be(e);default:return e}},Ae={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},Re=function(e,t){return Object(fe.b)(e,{error:null,loading:!0})},Le=function(e,t){return Object(fe.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},Pe=function(e,t){return Object(fe.b)(e,{error:t.error,loading:!1})},He=function(e,t){return Object(fe.b)(e,{token:null,userId:null})},xe=function(e,t){return Object(fe.b)(e,{authRedirectPath:t.path})},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he.d:return Re(e);case he.e:return Le(e,t);case he.b:return Pe(e,t);case he.c:return He(e);case he.o:return xe(e,t);default:return e}},Me="development"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).MODE_ENV?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:pe.d,ze=Object(pe.c)({burgerBuilder:ye,order:De,auth:Ue}),qe=Object(pe.e)(ze,Me(Object(pe.a)(je.a)));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(P.a,{store:qe},a.a.createElement(k.a,null,a.a.createElement(de,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[66,1,2]]]);
//# sourceMappingURL=main.e39ea255.chunk.js.map