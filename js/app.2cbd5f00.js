(function(e){function t(t){for(var o,a,l=t[0],s=t[1],c=t[2],d=0,p=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/swift-vmtype-maker/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},"31f2":function(e,t,n){"use strict";n("ebce")},"43be":function(e,t,n){e.exports=n.p+"img/icon_100.fe8758ba.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a={name:"App",components:{}},l=a,s=(n("034f"),n("2877")),c=Object(s["a"])(l,i,r,!1,null,null,null),u=c.exports,d=n("8c4f"),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app-maker"}},[o("img",{attrs:{alt:"Vue logo",src:n("43be")}}),o("HelloWorld"),o("footer",[o("Footer")],1)],1)},h=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("div",[n("br"),n("span",{staticClass:"segmented"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectionFramework,expression:"selectionFramework"}],attrs:{type:"radio",value:"SwiftUI"},domProps:{checked:e._q(e.selectionFramework,"SwiftUI")},on:{change:function(t){e.selectionFramework="SwiftUI"}}}),n("span",{staticClass:"segmented-button"},[e._v("SwiftUI")])]),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectionFramework,expression:"selectionFramework"}],attrs:{type:"radio",value:"UIKit"},domProps:{checked:e._q(e.selectionFramework,"UIKit")},on:{change:function(t){e.selectionFramework="UIKit"}}}),n("span",{staticClass:"segmented-button"},[e._v(" UIKit ")])])])]),n("div",{staticClass:"config-panel",style:{width:e.reactiveWidth}},[n("div",{staticClass:"view-name"},[n("label",{staticClass:"view-name-input-title"},[e._v("View Name")]),n("input",{attrs:{id:"view-name-input",type:"text",placeholder:e.placeholderName},on:{input:e.onChangeInput,change:e.onChangeValue}}),n("div",{staticClass:"text_underline"})])]),n("div",{staticClass:"name-validation"},[e.showValidationTypo?n("div",[n("label",[e._v("Typo? "+e._s(e.showValidationTypoWords))])]):e._e(),e.showValidationNotClphanumeric?n("div",[n("label",[e._v("Type name should only contain alphanumeric characters.")])]):e._e(),e.showValidationStartLower?n("div",[n("label",[e._v("Type name should start with an uppercase character.")])]):e._e()]),n("button",{staticClass:"copy-button",on:{click:function(t){return e.copyToClipboard()}}},[e._v("Copy to Clipboard")]),n("div",{staticClass:"centering-block"},[n("div",{staticClass:"centering-block-inner"},[n("label",{staticClass:"swift-file"},[e._v(e._s(e.currentName)+".swift")]),n("hr",{staticClass:"hr-line"}),n("div",{domProps:{innerHTML:e._s(e.generatedHighlightCode)}})])])])},v=[],w=(n("ac1f"),n("466d"),n("5319"),n("96cf"),n("1da1")),M=n("1487"),g=n.n(M),m={created:function(){window.addEventListener("keydown",this.keyboardEvent)},beforeDestroy:function(){window.removeEventListener("keydown",this.keyboardEvent)},data:function(){return{typoCheker:null,showValidationTypo:!1,showValidationTypoWords:"",showValidationNotClphanumeric:!1,showValidationStartLower:!1,reactiveWidth:"25ch",selectionFramework:"SwiftUI",currentName:"HogeHogeView",placeholderName:"HogeHogeView",generatedCode:this.generateCode("HogeHogeView"),generatedHighlightCode:this.highlight(this.generateCode("HogeHogeView"))}},watch:{selectionFramework:function(e){this.selectionFramework=e,this.generatedCode=this.generateCode(this.currentName,this.selectionFramework),this.generatedHighlightCode=this.highlight(this.generatedCode)}},methods:{keyboardEvent:function(e){e.metaKey&&83==e.keyCode&&(e.preventDefault(),this.copyToClipboard())},highlight:function(e){return g.a.highlightAuto(e,["swift"]).value},generateCode:function(e,t){var n="";return n="UIKit"==t?"import UIKit\n\nprotocol {{NAME}}ModelInputs {\n}\nprotocol {{NAME}}ModelOutputs {\n}\nprotocol {{NAME}}ModelType {\n    var inputs: {{NAME}}ModelInputs { get }\n    var outputs: {{NAME}}ModelOutputs { get }\n}\nextension {{NAME}}ModelType where Self: {{NAME}}ModelInputs {\n    var inputs: {{NAME}}ModelInputs { self }\n}\nextension {{NAME}}ModelType where Self: {{NAME}}ModelOutputs {\n    var outputs: {{NAME}}ModelOutputs { self }\n}\nclass Default{{NAME}}Model: {{NAME}}ModelType,\n                                {{NAME}}ModelInputs,\n                                {{NAME}}ModelOutputs {\n}\nclass {{NAME}}Controller: UIViewController {\n    private var viewModel: {{NAME}}ModelType?\n    override func viewDidLoad() {\n        super.viewDidLoad()\n    }\n    static func make(viewModel: {{NAME}}ModelType) -> {{NAME}}Controller {\n        let vc = {{NAME}}Controller()\n        vc.viewModel = viewModel\n        return vc\n    }\n}\nstruct {{NAME}}_Previews: PreviewProvider {\n    static var previews: some View {\n        ViewControllerPreviewView(instantiator: {\n            {{NAME}}Controller.make(viewModel: Mocked{{NAME}}Model())\n        })\n    }\n}\nclass Mocked{{NAME}}Model: {{NAME}}ModelType,\n                               {{NAME}}ModelInputs,\n                               {{NAME}}ModelOutputs {\n}\n\n//struct ViewControllerPreviewView<T: UIViewController>: UIViewControllerRepresentable {\n//    typealias UIViewControllerType = T\n//    public var instantiator: () -> T\n//    public func makeUIViewController(context: UIViewControllerRepresentableContext<Self>) -> Self.UIViewControllerType {\n//        return instantiator()\n//    }\n//    public func updateUIViewController(_ uiViewController: T, context: Context) {\n//    }\n//}\n":"import SwiftUI\n\nprotocol {{NAME}}ModelInputs {\n}\nprotocol {{NAME}}ModelOutputs {\n}\nprotocol {{NAME}}ModelBindings {\n}\nprotocol {{NAME}}ModelType: ObservableObject {\n    var inputs: {{NAME}}ModelInputs { get }\n    var outputs: {{NAME}}ModelOutputs { get }\n    var bindings: {{NAME}}ModelBindings { get set }\n}\nextension {{NAME}}ModelType where Self: {{NAME}}ModelInputs {\n    var inputs: {{NAME}}ModelInputs { self }\n}\nextension {{NAME}}ModelType where Self: {{NAME}}ModelOutputs {\n    var outputs: {{NAME}}ModelOutputs { self }\n}\nextension {{NAME}}ModelType where Self: {{NAME}}ModelBindings {\n    var bindings: {{NAME}}ModelBindings { get { self } set { } }\n}\n\nclass Default{{NAME}}Model: {{NAME}}ModelType,\n                                {{NAME}}ModelInputs,\n                                {{NAME}}ModelOutputs,\n                                {{NAME}}ModelBindings {\n}\nstruct {{NAME}}<ViewModelType: {{NAME}}ModelType>: View {\n    let viewModel: ViewModelType\n    var body: some View {\n        EmptyView()\n    }\n}\nstruct {{NAME}}_Previews: PreviewProvider {\n    static var previews: some View {\n        {{NAME}}(viewModel: Mocked{{NAME}}Model())\n    }\n}\nclass Mocked{{NAME}}Model: {{NAME}}ModelType,\n                               {{NAME}}ModelInputs,\n                               {{NAME}}ModelOutputs,\n                               {{NAME}}ModelBindings {\n}\n",0==e.length&&(e=this.placeholderName),n=n.replace(/{{NAME}}/g,e),n},onChangeValue:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function o(){var i,r,a,l,s,c,u,d;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){o.next=2;break}return o.abrupt("return");case 2:console.log("onChangeValue",e),null==t.typoCheker&&(i=n("4a5d"),t.typoCheker=new i("en_US",!1,!1,{dictionaryPath:"typo/dictionaries"})),r=[],a=/([A-Z][a-z]+)/g,l=a.exec(e.target.value);do{r.push(l[1])}while(null!==(l=a.exec(e.target.value)));s=[],c=0;case 10:if(!(c<r.length)){o.next=18;break}return o.next=13,t.typoCheker.check(r[c]);case 13:u=o.sent,u||s.push(r[c]);case 15:c++,o.next=10;break;case 18:if(s.length>0)for(t.showValidationTypo=!0,t.showValidationTypoWords="",d=0;d<s.length;d++)""!=t.showValidationTypoWords&&(t.showValidationTypoWords+=","),t.showValidationTypoWords+=s[d];else t.showValidationTypo=!1;console.log(r,s);case 20:case"end":return o.stop()}}),o)})))()},onChangeInput:function(e){this.currentName=e.target.value,this.generatedCode=this.generateCode(this.currentName,this.selectionFramework),this.generatedHighlightCode=this.highlight(this.generatedCode),e.target.value.length>15?this.reactiveWidth=e.target.value.length+10+"ch":this.reactiveWidth="25ch";var t=this.currentName.match("^[^A-Z]");null!=t&&t.length>0?this.showValidationStartLower=!0:this.showValidationStartLower=!1,t=this.currentName.match("[^A-Z^a-z]+"),null!=t&&t.length>0?this.showValidationNotClphanumeric=!0:this.showValidationNotClphanumeric=!1,this.showValidationTypo=!1},copyToClipboard:function(){var e=this.generatedCode;navigator.clipboard.writeText(e).then((function(){alert("copy to clipboard")})).catch((function(e){alert(e)}))}}},y=m,b=(n("31f2"),n("31d6"),Object(s["a"])(y,f,v,!1,null,null,null)),N=b.exports,E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("label",[e._v("Swift View Mdeol Type Maker for SwiftUI & UIKit")]),n("br"),n("label",[n("a",{attrs:{href:"https://github.com/fuziki/swift-vmtype-maker"}},[e._v("https://github.com/fuziki/swift-vmtype-maker")])])])}],C={},k=C,V=(n("760c"),Object(s["a"])(k,E,A,!1,null,null,null)),_=V.exports,T={name:"App",components:{HelloWorld:N,Footer:_}},I=T,x=(n("c76b"),Object(s["a"])(I,p,h,!1,null,null,null)),O=x.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v(" "+e._s(e.msg1)),n("br"),e._v(" "+e._s(e.msg2)+" ")])])},U=[],P={data:function(){return{msg1:"バージョン1.0.0 をリリースしました",msg2:"今後ともよろしくお願いいたします"}}},j=P,F=Object(s["a"])(j,S,U,!1,null,null,null),H=F.exports;o["a"].use(d["a"]);var W=new d["a"]({mode:"history",base:"/swift-vmtype-maker/",routes:[{path:"/",name:"ViewModelMaker",component:O},{path:"/announcement001",name:"Announcement001",component:H}]});o["a"].config.productionTip=!1,new o["a"]({router:W,render:function(e){return e(u)}}).$mount("#app")},"760c":function(e,t,n){"use strict";n("c3f5")},"85ec":function(e,t,n){},a18d:function(e,t,n){},c3f5:function(e,t,n){},c76b:function(e,t,n){"use strict";n("a18d")},ebce:function(e,t,n){}});
//# sourceMappingURL=app.2cbd5f00.js.map