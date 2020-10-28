<template>
  <div class="hello">
    <label>
      <label><input type="radio" v-model="selectionFramework" value="SwiftUI">SwiftUI</label>
      <label><input type="radio" v-model="selectionFramework" value="UIKit">UIKit</label>
    </label>
    <p>View Name: <input type="text" :placeholder="placeholderName" :style="{width: reactiveWidth}" @input="onChangeInput"><br></p>
    <button v-on:click="copyToClipboard()">Copy to Clipboard</button>
    <br>
    <div class="centering-block">
      <div class="centering-block-inner" v-html="generatedHighlightCode"></div>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js';

export default {
   data: function () {
    return {
      reactiveWidth: "25ch",
      selectionFramework: "SwiftUI",
      currentName: "HogeHogeView",
      placeholderName: "HogeHogeView",
      generatedCode: this.generateCode("HogeHogeView"),
      generatedHighlightCode: this.highlight(this.generateCode("HogeHogeView")),
    }
  },
  watch: {
    selectionFramework: function(framework)
    {
      this.selectionFramework = framework;
      this.generatedCode = this.generateCode(this.currentName, this.selectionFramework);
      this.generatedHighlightCode = this.highlight(this.generatedCode);
    }
  },
  methods: {
    highlight(code) {
      return hljs.highlightAuto(code, ["swift"]).value;
    },
    generateCode(name, framework) {
      var template = ""
      if(framework=="UIKit") {
        template = `
import UIKit

protocol {{NAME}}ModelInputs {
}
protocol {{NAME}}ModelOutputs {
}
protocol {{NAME}}ModelType {
    var inputs: {{NAME}}ModelInputs { get }
    var outputs: {{NAME}}ModelOutputs { get }
}
extension {{NAME}}ModelType where Self: {{NAME}}ModelInputs {
    var inputs: {{NAME}}ModelInputs { self }
}
extension {{NAME}}ModelType where Self: {{NAME}}ModelOutputs {
    var outputs: {{NAME}}ModelOutputs { self }
}
class Default{{NAME}}Model: {{NAME}}ModelType,
                                {{NAME}}ModelInputs,
                                {{NAME}}ModelOutputs {
}
class {{NAME}}Controller: UIViewController {
    private var viewModel: {{NAME}}ModelType?
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    static func make(viewModel: {{NAME}}ModelType) -> {{NAME}}Controller {
        let vc = {{NAME}}Controller()
        vc.viewModel = viewModel
        return vc
    }
}
struct {{NAME}}_Previews: PreviewProvider {
    static var previews: some View {
        ViewControllerPreviewView(instantiator: {
            {{NAME}}Controller.make(viewModel: Mocked{{NAME}}Model())
        })
    }
}
class Mocked{{NAME}}Model: {{NAME}}ModelType,
                               {{NAME}}ModelInputs,
                               {{NAME}}ModelOutputs {
}

//struct ViewControllerPreviewView<T: UIViewController>: UIViewControllerRepresentable {
//    typealias UIViewControllerType = T
//    public var instantiator: () -> T
//    public func makeUIViewController(context: UIViewControllerRepresentableContext<Self>) -> Self.UIViewControllerType {
//        return instantiator()
//    }
//    public func updateUIViewController(_ uiViewController: T, context: Context) {
//    }
//}
`;
      } else {
        template = `
import SwiftUI

protocol {{NAME}}ModelInputs {
}
protocol {{NAME}}ModelOutputs {
}
protocol {{NAME}}ModelBindings {
}
protocol {{NAME}}ModelType: ObservableObject {
    var inputs: {{NAME}}ModelInputs { get }
    var outputs: {{NAME}}ModelOutputs { get }
    var bindings: {{NAME}}ModelBindings { get set }
}
extension {{NAME}}ModelType where Self: {{NAME}}ModelInputs {
    var inputs: {{NAME}}ModelInputs { self }
}
extension {{NAME}}ModelType where Self: {{NAME}}ModelOutputs {
    var outputs: {{NAME}}ModelOutputs { self }
}
extension {{NAME}}ModelType where Self: {{NAME}}ModelBindings {
    var bindings: {{NAME}}ModelBindings { get { self } set { } }
}

class Default{{NAME}}Model: {{NAME}}ModelType,
                                {{NAME}}ModelInputs,
                                {{NAME}}ModelOutputs,
                                {{NAME}}ModelBindings {
}
struct {{NAME}}<ViewModelType: {{NAME}}ModelType>: View {
    let viewModel: ViewModelType
    var body: some View {
        EmptyView()
    }
}
struct {{NAME}}_Previews: PreviewProvider {
    static var previews: some View {
        {{NAME}}(viewModel: Mocked{{NAME}}Model())
    }
}
class Mocked{{NAME}}Model: {{NAME}}ModelType,
                               {{NAME}}ModelInputs,
                               {{NAME}}ModelOutputs,
                               {{NAME}}ModelBindings {
}
`;
      }
      if(name.length == 0) {
        name = this.placeholderName
      }
      template = template.replace(/{{NAME}}/g, name);
      return template;
    },
    onChangeInput(event) {
      this.currentName = event.target.value;
      this.generatedCode = this.generateCode(this.currentName, this.selectionFramework);
      this.generatedHighlightCode = this.highlight(this.generatedCode);
      if(event.target.value.length > 15) {
        this.reactiveWidth = (event.target.value.length + 10) + "ch"
      } else {
        this.reactiveWidth = "25ch"
      }
    },
    copyToClipboard() {
      const copyString = this.generatedCode
      navigator
        .clipboard
        .writeText(copyString)
        .then(() => {
          alert("copy to clipboard")
        })
        .catch(e => {
          alert(e)
        })
    },
  },
}
</script>

<style>
.centering-block {
 text-align: center;
}
.centering-block .centering-block-inner {
 text-align: left;
 display: inline-block;
 white-space: pre-wrap;
 margin-bottom: 64px;
}
</style>
<style src='highlight.js/styles/github-gist.css'></style>
