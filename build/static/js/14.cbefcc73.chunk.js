webpackJsonp([14],{1156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(41),a=n(0),l=(n.n(a),n(1298)),i=(n.n(l),n(223)),A=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={data:[]},t}return Object(r.d)(t,e),t.prototype.routerdetail=function(e){this.props.history.push("/main/detailpijuan")},t.prototype.render=function(){var e=this;return a.createElement("div",null,a.createElement("h2",null,"\u5f85\u6279\u73ed\u7ea7"),a.createElement("div",{className:"pending"},a.createElement("div",{className:"table"},a.createElement("table",null,a.createElement("tr",null,a.createElement("td",null,"\u73ed\u7ea7\u540d\u79f0"),a.createElement("td",null,"\u8bfe\u7a0b\u540d\u79f0"),a.createElement("td",null,"\u9605\u5377\u72b6\u6001"),a.createElement("td",null,"\u8bfe\u7a0b\u540d\u79f0"),a.createElement("td",null,"\u6210\u6750\u7387"),a.createElement("td",null,"\u64cd\u4f5c")),this.state.data&&this.state.data.map(function(t,n){return a.createElement("tr",{className:"tr_bg",key:n},a.createElement("td",null,t.grade_name),a.createElement("td",null,t.subject_text),a.createElement("td",null),a.createElement("td",null,t.subject_text),a.createElement("td",null,t.room_text),a.createElement("td",{onClick:e.routerdetail.bind(e,t)},"\u6279\u5377"))})))))},t.prototype.componentDidMount=function(){return Object(r.b)(this,void 0,void 0,function(){var e;return Object(r.e)(this,function(t){switch(t.label){case 0:return[4,this.props.question.noclassroom()];case 1:return e=t.sent().data,console.log(e),this.setState({data:e}),[2]}})})},t=Object(r.c)([Object(i.b)("question"),i.c],t)}(a.Component);t.default=A},1298:function(e,t,n){var r=n(1299);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!1,transform:void 0};n(1135)(r,a);r.locals&&(e.exports=r.locals)},1299:function(e,t,n){(e.exports=n(1134)(!0)).push([e.i,"h2{width:100%;height:80px;line-height:80px;padding-left:5px}.pending{width:96%;height:auto;background:#fff;border-radius:8px;padding:20px}.table table{width:100%}.table table tr{height:55px;line-height:55px;background:#eee;border-bottom:1px solid #ccc}.table table tr td{padding-left:10px}.table table .tr_bg{background:#fff}","",{version:3,sources:["F:/I must success/managerTest/managertionTest/src/views/main/Marking/Pending.css"],names:[],mappings:"AAAA,GACI,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,gBAAkB,CACrB,AACD,SACI,UAAW,AACX,YAAa,AACb,gBAAiB,AACjB,kBAAmB,AACnB,YAAmB,CACtB,AACD,aACI,UAAY,CACf,AACD,gBACI,YAAa,AACb,iBAAkB,AAClB,gBAAiB,AACjB,4BAA8B,CACjC,AACD,mBACI,iBAAmB,CACtB,AACD,oBACI,eAAgB,CACnB",file:"Pending.css",sourcesContent:["h2{\r\n    width: 100%;\r\n    height: 80px;\r\n    line-height: 80px;\r\n    padding-left: 5px;\r\n}\r\n.pending{\r\n    width: 96%;\r\n    height: auto;\r\n    background: #fff;\r\n    border-radius: 8px;\r\n    padding: 20px 20px;\r\n}\r\n.table table{\r\n    width: 100%;\r\n}\r\n.table table tr{\r\n    height: 55px;\r\n    line-height: 55px;\r\n    background: #eee;\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n.table table tr td{\r\n    padding-left: 10px;\r\n}\r\n.table table .tr_bg{\r\n    background:#fff;\r\n}"],sourceRoot:""}])}});
//# sourceMappingURL=14.cbefcc73.chunk.js.map