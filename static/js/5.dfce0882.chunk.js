(this.webpackJsonpmcdownload=this.webpackJsonpmcdownload||[]).push([[5],{100:function(e,n,r){e.exports={Order:"Order_Order__1vbkx"}},104:function(e,n,r){"use strict";r.r(n);var t=r(5),a=r(6),i=r(8),o=r(7),c=r(0),s=r.n(c),u=r(15),d=r(100),p=r.n(d),l=function(e){var n=[];for(var r in e.ingredients)n.push({name:r,amount:e.ingredients[r]});var t=n.map((function(e){return s.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")}));return s.a.createElement("div",{className:p.a.Order},s.a.createElement("p",null,"Ingredients: ",t),s.a.createElement("p",null,"Price: ",s.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))},m=r(19),f=r(42),h=r(16),b=r(41),O=function(e){Object(i.a)(r,e);var n=Object(o.a)(r);function r(){return Object(t.a)(this,r),n.apply(this,arguments)}return Object(a.a)(r,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=s.a.createElement(b.a,null);return this.props.loading||(e=this.props.orders.map((function(e){return s.a.createElement(l,{key:e.id,ingredients:e.ingredients,price:e.price})}))),s.a.createElement("div",null,e)}}]),r}(c.Component);n.default=Object(u.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(n,r){return e(h.d(n,r))}}}))(Object(f.a)(O,m.a))}}]);
//# sourceMappingURL=5.dfce0882.chunk.js.map