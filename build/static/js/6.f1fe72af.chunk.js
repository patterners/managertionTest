webpackJsonp([6],{1141:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"index",function(){return A});var r=n(41),i=n(1192),s=(n.n(i),n(0)),a=(n.n(s),n(224)),l=n(223),o=n(1194),A=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={visible:!1,list:[],typeName:"",typeId:""},t.showModal=function(){t.setState({visible:!0})},t.handleOk=function(e){t.setState({visible:!1},function(){t.addQuestionType()})},t.handleCancel=function(e){t.setState({visible:!1})},t.handlechange=function(e){var n;t.setState(((n={})[e.target.name]=e.target.value,n))},t}return Object(r.d)(t,e),t.prototype.render=function(){var e=this.state,t=e.typeName,n=e.typeId;return s.createElement("div",null,s.createElement("h2",null,"\u8bd5\u9898\u5206\u7c7b"),s.createElement("div",{className:"antd-dabox"},s.createElement("div",{className:"and-but"},s.createElement(a.a,{size:"large",type:"primary",onClick:this.showModal},"+ \u6dfb\u52a0\u7c7b\u578b "),s.createElement(a.j,{title:"\u521b\u5efa\u65b0\u7c7b\u578b",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},s.createElement("p",null,s.createElement("input",{className:"inp",type:"text",placeholder:"\u8bf7\u8f93\u5165\u7c7b\u578b\u540d\u79f0",value:t,name:"typeName",onChange:this.handlechange})),s.createElement("p",null,s.createElement("input",{className:"inp",type:"text",placeholder:"\u8bf7\u8f93\u5165\u7c7b\u578bId",value:n,name:"typeId",onChange:this.handlechange})))),s.createElement("div",{className:"list"},s.createElement(o.a,Object(r.a)({list:this.state.list},this.props)))))},t.prototype.componentDidMount=function(){return Object(r.b)(this,void 0,void 0,function(){var e;return Object(r.e)(this,function(t){switch(t.label){case 0:return[4,this.props.question.getQuestionsType()];case 1:return e=t.sent().data,this.setState({list:e}),[2]}})})},t.prototype.addQuestionType=function(){return Object(r.b)(this,void 0,void 0,function(){var e,t,n,i;return Object(r.e)(this,function(r){switch(r.label){case 0:return e=this.state,t=e.typeName,n=e.typeId,[4,this.props.question.addQuestionType({test:t,sort:n})];case 1:return r.sent(),[4,this.props.question.getQuestionsType()];case 2:return i=r.sent().data,this.setState({list:i}),[2]}})})},t.prototype.removeQuestion=function(e){return Object(r.b)(this,void 0,void 0,function(){var t;return Object(r.e)(this,function(n){switch(n.label){case 0:return[4,this.props.question.removeQuestion({id:e})];case 1:return t=n.sent(),console.log(t),[2]}})})},t=Object(r.c)([Object(l.b)("question"),l.c],t)}(s.Component);t.default=A},1192:function(e,t,n){var r=n(1193);"string"===typeof r&&(r=[[e.i,r,""]]);var i={hmr:!1,transform:void 0};n(1135)(r,i);r.locals&&(e.exports=r.locals)},1193:function(e,t,n){(e.exports=n(1134)(!0)).push([e.i,"h2{width:100%;height:80px;line-height:80px;padding-left:5px}.list li{list-style:none;line-height:55px;border-bottom:1px solid #ccc}li span{margin-left:10px}.li{list-style:none;line-height:55px;border-bottom:1px solid #ccc}.li .span1{width:150px;height:55px;display:inline-block;margin-right:275px}.inp{width:80%;margin-left:50%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);height:44px;border:1px solid #ccc}.list{clear:both}.antd-dabox{width:95%;height:85%;padding:0 20px;border-radius:10px;background:#fff}.and-but{float:left;margin:20px 0}","",{version:3,sources:["F:/I must success/managerTest/managertionTest/src/views/main/quertion/classifyQuestion/index.css"],names:[],mappings:"AAAA,GACI,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,gBAAkB,CACrB,AACD,SACI,gBAAiB,AACjB,iBAAkB,AAClB,4BAA8B,CACjC,AACD,QACI,gBAAkB,CAErB,AACD,IACI,gBAAiB,AACjB,iBAAkB,AAClB,4BAA8B,CACjC,AACD,WACI,YAAa,AACb,YAAa,AACb,qBAAqB,AACrB,kBAAoB,CACvB,AACD,KACI,UAAW,AACX,gBAAiB,AACjB,kCAAmC,AAC/B,8BAA+B,AAC3B,0BAA2B,AACnC,YAAa,AACb,qBAAsB,CACzB,AACD,MACI,UAAY,CACf,AACD,YACI,UAAW,AACX,WAAY,AACZ,eAAgB,AAChB,mBAAoB,AACpB,eAAgB,CACnB,AAED,SACI,WAAY,AACZ,aAAe,CAClB",file:"index.css",sourcesContent:["h2{\r\n    width: 100%;\r\n    height: 80px;\r\n    line-height: 80px;\r\n    padding-left: 5px;\r\n}\r\n.list li{\r\n    list-style: none;\r\n    line-height: 55px;\r\n    border-bottom: 1px solid #ccc;\r\n}\r\nli span{\r\n    margin-left: 10px;\r\n    /* margin-right: 360px; */\r\n}\r\n.li{\r\n    list-style: none;\r\n    line-height: 55px;\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n.li .span1{\r\n    width: 150px;\r\n    height: 55px;\r\n    display:inline-block;\r\n    margin-right: 275px;\r\n}\r\n.inp{\r\n    width: 80%;\r\n    margin-left: 50%;\r\n    -webkit-transform: translate(-50%);\r\n        -ms-transform: translate(-50%);\r\n            transform: translate(-50%);\r\n    height: 44px;\r\n    border:1px solid #ccc;\r\n}\r\n.list{\r\n    clear: both;\r\n}\r\n.antd-dabox{\r\n    width: 95%;\r\n    height: 85%;\r\n    padding: 0 20px;\r\n    border-radius: 10px;\r\n    background:#fff;\r\n}\r\n\r\n.and-but{\r\n    float: left;\r\n    margin: 20px 0;\r\n}"],sourceRoot:""}])},1194:function(e,t,n){"use strict";var r=n(41),i=n(0),s=(n.n(i),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.d)(t,e),t.prototype.render=function(){var e=this.props.list;return i.createElement("div",{className:"list"},i.createElement("li",null,i.createElement("span",null,"\u7c7b\u578bID"),i.createElement("span",null,"\u7c7b\u578b\u540d\u79f0"),i.createElement("span",null,"\u64cd\u4f5c")),e&&e.map(function(e,t){return i.createElement("div",{className:"li",key:t},i.createElement("span",{className:"span1"},e.questions_type_id),i.createElement("span",{className:"span2"},e.questions_type_text))}))},t}(i.Component));t.a=s}});
//# sourceMappingURL=6.f1fe72af.chunk.js.map