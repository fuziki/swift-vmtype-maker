<template>
  <div class="hello">
    <label>
      <label><input type="radio" v-model="selectionFramework" value="SwiftUI">SwiftUI</label>
      <label><input type="radio" v-model="selectionFramework" value="UIKit">UIKit</label>
    </label>
    <p>View Name: <input type="text" :placeholder="placeholderName" @input="onChangeInput"><br></p>
    <button v-on:click="copyToClipboard()">copy to clipboard</button>
    <br><br>
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
protocol {{NAME}}ModelType: {{NAME}}ModelInputs, {{NAME}}ModelOutputs {
    var inputs: {{NAME}}ModelInputs { get }
    var outputs: {{NAME}}ModelOutputs { get }
}
extension {{NAME}}ModelType {
    var inputs: {{NAME}}ModelInputs { self }
    var outputs: {{NAME}}ModelOutputs { self }
}
class Default{{NAME}}Model: {{NAME}}ModelType {
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
class Mocked{{NAME}}Model: {{NAME}}ModelType {
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
protocol {{NAME}}ModelType: ObservableObject,
                            {{NAME}}ModelInputs,
                            {{NAME}}ModelOutputs,
                            {{NAME}}ModelBindings {
    var inputs: {{NAME}}ModelInputs { get }
    var outputs: {{NAME}}ModelOutputs { get }
    var bindings: {{NAME}}ModelBindings { get set }
}
extension {{NAME}}ModelType {
    var inputs: {{NAME}}ModelInputs { self }
    var outputs: {{NAME}}ModelOutputs { self }
    var bindings: {{NAME}}ModelBindings { get { self } set { } }
}
class Default{{NAME}}Model: {{NAME}}ModelType {
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
class Mocked{{NAME}}Model: {{NAME}}ModelType {
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
}
</style>
<style src='highlightjs/styles/github-gist.css'></style>
