(this["webpackJsonpreact-components-test-joeynguyen"]=this["webpackJsonpreact-components-test-joeynguyen"]||[]).push([[0],[,,,,,function(e,t){e.exports=[{name:"HelloWorld",description:"A super lame component that says Hello with a custom message.",props:{message:{type:{name:"string"},required:!1,description:"Message to display",defaultValue:{value:"'World'",computed:!1}}},code:"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** A super lame component that says Hello with a custom message. */\nfunction HelloWorld({message}) {\n  return <div>Hello {message}</div>\n}\n\nHelloWorld.propTypes = {\n  /** Message to display */\n  message: PropTypes.string\n};\n\nHelloWorld.defaultProps = {\n  message: 'World'\n};\n\nexport default HelloWorld;\n",examples:[{name:"ExampleHelloWorld",description:"Custom message",code:"import React from 'react';\nimport HelloWorld from 'ps-react/HelloWorld';\n\n/** Custom message */\nexport default function ExampleHelloWorld() {\n  return <HelloWorld message=\"Pluralsight viewers!\" />\n}\n"}]}]},,function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(0),r=n.n(a);function o(e){var t=e.message;return r.a.createElement("div",null,"Hello ",t)}o.defaultProps={message:"World"};var l=o;function i(){return r.a.createElement(l,{message:"Pluralsight viewers!"})}},,,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){(function(t){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,a=n.Prism={manual:n.Prism&&n.Prism.manual,util:{encode:function(e){return e instanceof r?new r(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){switch(a.util.type(e)){case"Object":var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=a.util.clone(e[n]));return t;case"Array":return e.map&&e.map((function(e){return a.util.clone(e)}))}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var o=(r=r||a.languages)[e];if(2==arguments.length){for(var l in n=arguments[1])n.hasOwnProperty(l)&&(o[l]=n[l]);return o}var i={};for(var s in o)if(o.hasOwnProperty(s)){if(s==t)for(var l in n)n.hasOwnProperty(l)&&(i[l]=n[l]);i[s]=o[s]}return a.languages.DFS(a.languages,(function(t,n){n===r[e]&&t!=e&&(this[t]=i)})),r[e]=i},DFS:function(e,t,n,r){for(var o in r=r||{},e)e.hasOwnProperty(o)&&(t.call(e,o,e[o],n||o),"Object"!==a.util.type(e[o])||r[a.util.objId(e[o])]?"Array"!==a.util.type(e[o])||r[a.util.objId(e[o])]||(r[a.util.objId(e[o])]=!0,a.languages.DFS(e[o],t,o,r)):(r[a.util.objId(e[o])]=!0,a.languages.DFS(e[o],t,null,r)))}},plugins:{},highlightAll:function(e,t){var n={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",n);for(var r,o=n.elements||document.querySelectorAll(n.selector),l=0;r=o[l++];)a.highlightElement(r,!0===e,n.callback)},highlightElement:function(t,r,o){for(var l,i,s=t;s&&!e.test(s.className);)s=s.parentNode;s&&(l=(s.className.match(e)||[,""])[1].toLowerCase(),i=a.languages[l]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,s=t.parentNode,/pre/i.test(s.nodeName)&&(s.className=s.className.replace(e,"").replace(/\s+/g," ")+" language-"+l);var u={element:t,language:l,grammar:i,code:t.textContent};if(a.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return u.code&&(a.hooks.run("before-highlight",u),u.element.textContent=u.code,a.hooks.run("after-highlight",u)),void a.hooks.run("complete",u);if(a.hooks.run("before-highlight",u),r&&n.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u.highlightedCode=e.data,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,o&&o.call(u.element),a.hooks.run("after-highlight",u),a.hooks.run("complete",u)},c.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=a.highlight(u.code,u.grammar,u.language),a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,o&&o.call(t),a.hooks.run("after-highlight",u),a.hooks.run("complete",u)},highlight:function(e,t,n){var o=a.tokenize(e,t);return r.stringify(a.util.encode(o),n)},matchGrammar:function(e,t,n,r,o,l,i){var s=a.Token;for(var u in n)if(n.hasOwnProperty(u)&&n[u]){if(u==i)return;var c=n[u];c="Array"===a.util.type(c)?c:[c];for(var g=0;g<c.length;++g){var p=c[g],m=p.inside,d=!!p.lookbehind,h=!!p.greedy,f=0,v=p.alias;if(h&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var b=r,k=o;b<t.length;k+=t[b].length,++b){var w=t[b];if(t.length>e.length)return;if(!(w instanceof s)){p.lastIndex=0;var E=1;if(!(A=p.exec(w))&&h&&b!=t.length-1){if(p.lastIndex=k,!(A=p.exec(e)))break;for(var x=A.index+(d?A[1].length:0),j=A.index+A[0].length,O=b,S=k,C=t.length;C>O&&(j>S||!t[O].type&&!t[O-1].greedy);++O)x>=(S+=t[O].length)&&(++b,k=S);if(t[b]instanceof s||t[O-1].greedy)continue;E=O-b,w=e.slice(k,S),A.index-=k}if(A){d&&(f=A[1].length);j=(x=A.index+f)+(A=A[0].slice(f)).length;var A,N=w.slice(0,x),P=w.slice(j),W=[b,E];N&&(++b,k+=N.length,W.push(N));var H=new s(u,m?a.tokenize(A,m):A,v,A,h);if(W.push(H),P&&W.push(P),Array.prototype.splice.apply(t,W),1!=E&&a.matchGrammar(e,t,n,b,k,!0,u),l)break}else if(l)break}}}}},tokenize:function(e,t){var n=[e],r=t.rest;if(r){for(var o in r)t[o]=r[o];delete t.rest}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,o=0;r=n[o++];)r(t)}}},r=a.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r};if(r.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map((function(n){return r.stringify(n,t,e)})).join("");var o={type:e.type,content:r.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if("comment"==o.type&&(o.attributes.spellcheck="true"),e.alias){var l="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(o.classes,l)}a.hooks.run("wrap",o);var i=Object.keys(o.attributes).map((function(e){return e+'="'+(o.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+(i?" "+i:"")+">"+o.content+"</"+o.tag+">"},!n.document)return n.addEventListener?(n.addEventListener("message",(function(e){var t=JSON.parse(e.data),r=t.language,o=t.code,l=t.immediateClose;n.postMessage(a.highlight(o,a.languages[r],r)),l&&n.close()}),!1),n.Prism):n.Prism;var o=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return o&&(a.filename=o.src,!document.addEventListener||a.manual||o.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),n.Prism}();e.exports&&(e.exports=a),"undefined"!=typeof t&&(t.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\s\S])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\s\S]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript"}}),a.languages.js=a.languages.javascript,function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?[\w\.:-]+\s*(?:\s+(?:[\w\.:-]+(?:=(?:("|')(\\?[\s\S])*?\1|[^\s'">=]+|(\{[\s\S]*?\})))?|\{\.{3}\w+\})\s*)*\/?>/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:('|")[\s\S]*?(\1)|[^\s>]+)/i,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\.{3}\w+\}/,inside:{punctuation:/\{|\}|\./,"attr-value":/\w+/}}},e.languages.jsx.tag);var n=e.util.clone(e.languages.jsx);delete n.punctuation,n=e.languages.insertBefore("jsx","operator",{punctuation:/=(?={)|[{}[\];(),.:]/},{jsx:n}),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{[^}]*\}|[^}])+\})/i,inside:n,alias:"language-javascript"}},e.languages.jsx.tag)}(a)}).call(this,n(17))},,,,,,,function(e,t,n){var a={"./HelloWorld/ExampleHelloWorld":7,"./HelloWorld/ExampleHelloWorld.js":7};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=23},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),l=n.n(o),i=(n(15),n(1)),s=n(2),u=n(4),c=n(3),g=function(e){var t=e.components;return r.a.createElement("ul",{className:"navigation"},t.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("a",{href:"#".concat(e)},e))})))},p=(n(16),n(9)),m=(n(22),function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("pre",{ref:function(t){e.element=t}},r.a.createElement(p.PrismCode,{className:"language-jsx"},this.props.children))}}]),n}(r.a.Component)),d=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).toggleCode=function(e){e.preventDefault(),n.setState((function(e){return{showCode:!e.showCode}}))},n.state={showCode:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.showCode,t=this.props.example,a=t.code,o=t.description,l=t.name,i=n(23)("./".concat(this.props.componentName,"/").concat(l)).default;return r.a.createElement("div",{className:"example"},o&&r.a.createElement("h4",null,o),r.a.createElement(i,null),r.a.createElement("p",null,r.a.createElement("a",{href:"",onClick:this.toggleCode},e?"Hide":"Show"," Code")),e&&r.a.createElement(m,null,a))}}]),a}(r.a.Component),h=function(e){var t=e.props;return r.a.createElement("table",{className:"props"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Default"),r.a.createElement("th",null,"Required"))),r.a.createElement("tbody",null,Object.keys(t).map((function(e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,e),r.a.createElement("td",null,t[e].description),r.a.createElement("td",null,t[e].type.name),r.a.createElement("td",null,t[e].defaultValue&&t[e].defaultValue.value),r.a.createElement("td",null,t[e].required&&"X"))}))))},f=function(e){var t=e.component,n=t.name,a=t.description,o=t.props,l=t.examples;return r.a.createElement("div",{className:"componentpage"},r.a.createElement("h2",null,n),r.a.createElement("p",null,a),r.a.createElement("h3",null,"Example",l.length>1&&"s"),l.length>0?l.map((function(e){return r.a.createElement(d,{key:e.code,example:e,componentName:n})})):"No examples exist.",r.a.createElement("h3",null,"Props"),o?r.a.createElement(h,{props:o}):"This component accepts no props.")},v=n(5),y=n.n(v),b=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={route:window.location.hash.substr(1)},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("hashchange",(function(){e.setState({route:window.location.hash.substr(1)})}))}},{key:"render",value:function(){var e=this.state.route,t=e?y.a.filter((function(t){return t.name===e}))[0]:y.a[0];return r.a.createElement("div",null,r.a.createElement(g,{components:y.a.map((function(e){return e.name}))}),r.a.createElement(f,{component:t}))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.f86c1eb1.chunk.js.map