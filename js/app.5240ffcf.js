(function(e){function n(n){for(var o,l,a=n[0],s=n[1],u=n[2],c=0,p=[];c<a.length;c++)l=a[c],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(n);while(p.length)p.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,a=1;a<t.length;a++){var s=t[a];0!==r[s]&&(o=!1)}o&&(i.splice(n--,1),e=l(l.s=t[0]))}return e}var o={},r={app:0},i=[];function l(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=o,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)l.d(t,o,function(n){return e[n]}.bind(null,o));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=n,a=a.slice();for(var u=0;u<a.length;u++)n(a[u]);var d=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var o=t("85ec"),r=t.n(o);r.a},"31f2":function(e,n,t){"use strict";var o=t("ebce"),r=t.n(o);r.a},"43be":function(e,n,t){e.exports=t.p+"img/icon_100.fe8758ba.png"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{alt:"Vue logo",src:t("43be")}}),o("HelloWorld")],1)},i=[],l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("label",[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectionFramework,expression:"selectionFramework"}],attrs:{type:"radio",value:"SwiftUI"},domProps:{checked:e._q(e.selectionFramework,"SwiftUI")},on:{change:function(n){e.selectionFramework="SwiftUI"}}}),e._v("SwiftUI")]),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectionFramework,expression:"selectionFramework"}],attrs:{type:"radio",value:"UIKit"},domProps:{checked:e._q(e.selectionFramework,"UIKit")},on:{change:function(n){e.selectionFramework="UIKit"}}}),e._v("UIKit")])]),t("p",[e._v("View Name: "),t("input",{attrs:{type:"text",placeholder:e.placeholderName},on:{input:e.onChangeInput}}),t("br")]),t("button",{on:{click:function(n){return e.copyToClipboard()}}},[e._v("copy to clipboard")]),t("br"),t("br"),t("div",{staticClass:"centering-block"},[t("div",{staticClass:"centering-block-inner",domProps:{innerHTML:e._s(e.generatedHighlightCode)}})])])},a=[],s=(t("ac1f"),t("5319"),t("1487")),u=t.n(s),d={data:function(){return{selectionFramework:"SwiftUI",currentName:"HogeHogeView",placeholderName:"HogeHogeView",generatedCode:this.generateCode("HogeHogeView"),generatedHighlightCode:this.highlight(this.generateCode("HogeHogeView"))}},watch:{selectionFramework:function(e){this.selectionFramework=e,this.generatedCode=this.generateCode(this.currentName,this.selectionFramework),this.generatedHighlightCode=this.highlight(this.generatedCode)}},methods:{highlight:function(e){return u.a.highlightAuto(e,["swift"]).value},generateCode:function(e,n){var t="";return t="UIKit"==n?"\nimport UIKit\n\nprotocol {{NAME}}ModelInputs {\n}\nprotocol {{NAME}}ModelOutputs {\n}\nprotocol {{NAME}}ModelType {\n    var inputs: {{NAME}}ModelInputs { get }\n    var outputs: {{NAME}}ModelOutputs { get }\n}\nextension {{NAME}}ModelType where Self: {{NAME}}ModelInputs {\n    var inputs: {{NAME}}ModelInputs { self }\n}\nextension {{NAME}}ModelType where Self: {{NAME}}ModelOutputs {\n    var outputs: {{NAME}}ModelOutputs { self }\n}\nclass Default{{NAME}}Model: {{NAME}}ModelType,\n                                {{NAME}}ModelInputs,\n                                {{NAME}}ModelOutputs {\n}\nclass {{NAME}}Controller: UIViewController {\n    private var viewModel: {{NAME}}ModelType?\n    override func viewDidLoad() {\n        super.viewDidLoad()\n    }\n    static func make(viewModel: {{NAME}}ModelType) -> {{NAME}}Controller {\n        let vc = {{NAME}}Controller()\n        vc.viewModel = viewModel\n        return vc\n    }\n}\nstruct {{NAME}}_Previews: PreviewProvider {\n    static var previews: some View {\n        ViewControllerPreviewView(instantiator: {\n            {{NAME}}Controller.make(viewModel: Mocked{{NAME}}Model())\n        })\n    }\n}\nclass Mocked{{NAME}}Model: {{NAME}}ModelType,\n                               {{NAME}}ModelInputs,\n                               {{NAME}}ModelOutputs {\n}\n\n//struct ViewControllerPreviewView<T: UIViewController>: UIViewControllerRepresentable {\n//    typealias UIViewControllerType = T\n//    public var instantiator: () -> T\n//    public func makeUIViewController(context: UIViewControllerRepresentableContext<Self>) -> Self.UIViewControllerType {\n//        return instantiator()\n//    }\n//    public func updateUIViewController(_ uiViewController: T, context: Context) {\n//    }\n//}\n":"\n\nimport SwiftUI\n\nprotocol {{NAME}}ModelInputs {\n}\nprotocol {{NAME}}ModelOutputs {\n}\nprotocol {{NAME}}ModelBindings {\n}\nprotocol {{NAME}}ModelType: ObservableObject {\n    var inputs: {{NAME}}ModelInputs { get }\n    var outputs: {{NAME}}ModelOutputs { get }\n    var bindings: {{NAME}}ModelBindings { get set }\n}\nextension {{NAME}}ModelType where Self: {{NAME}}ModelInputs {\n    var inputs: {{NAME}}ModelInputs { self }\n}\nextension {{NAME}}ModelType where Self: {{NAME}}ModelOutputs {\n    var outputs: {{NAME}}ModelOutputs { self }\n}\nextension {{NAME}}ModelType where Self: {{NAME}}ModelBindings {\n    var bindings: {{NAME}}ModelBindings { get { self } set { } }\n}\n\nclass Default{{NAME}}Model: {{NAME}}ModelType,\n                                {{NAME}}ModelInputs,\n                                {{NAME}}ModelOutputs,\n                                {{NAME}}ModelBindings {\n}\nstruct {{NAME}}<ViewModelType: {{NAME}}ModelType>: View {\n    let viewModel: ViewModelType\n    var body: some View {\n        EmptyView()\n    }\n}\nstruct {{NAME}}_Previews: PreviewProvider {\n    static var previews: some View {\n        {{NAME}}(viewModel: Mocked{{NAME}}Model())\n    }\n}\nclass Mocked{{NAME}}Model: {{NAME}}ModelType,\n                               {{NAME}}ModelInputs,\n                               {{NAME}}ModelOutputs,\n                               {{NAME}}ModelBindings {\n}\n",0==e.length&&(e=this.placeholderName),t=t.replace(/{{NAME}}/g,e),t},onChangeInput:function(e){this.currentName=e.target.value,this.generatedCode=this.generateCode(this.currentName,this.selectionFramework),this.generatedHighlightCode=this.highlight(this.generatedCode)},copyToClipboard:function(){var e=this.generatedCode;navigator.clipboard.writeText(e).then((function(){alert("copy to clipboard")})).catch((function(e){alert(e)}))}}},c=d,p=(t("31f2"),t("31d6"),t("2877")),M=Object(p["a"])(c,l,a,!1,null,null,null),f=M.exports,h={name:"App",components:{HelloWorld:f}},v=h,w=(t("034f"),Object(p["a"])(v,r,i,!1,null,null,null)),g=w.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(g)}}).$mount("#app")},"85ec":function(e,n,t){},ebce:function(e,n,t){}});
//# sourceMappingURL=app.5240ffcf.js.map