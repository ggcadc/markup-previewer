import React, { Component } from 'react';
import InputBox from './components/input.js'
import OutputBox from './components/output.js'
import './App.css';
const marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: true
});

class App extends Component {
  constructor() {
    super();

    this.state = {

      input:`
## markdown quick reference
# headers

*emphasis*

**strong**

* list

>block quote

    code (4 spaces indent)
[links](http://wikipedia.org)`,

      result:`
<h2 id="markdown-quick-reference">markdown quick reference</h2>
<h1 id="headers">headers</h1>
<p><em>emphasis</em></p>
<p><strong>strong</strong></p>
<ul>
<li>list</li>
</ul>
<blockquote>
<p>block quote</p>
</blockquote>
<pre><code>code (4 spaces indent)
</code></pre><p><a href="http://wikipedia.org">links</a></p>`
    }
  }

  inputUpdate(event){
    this.setState({
      input: event.target.value,
    }, this.resultUpdate())
  }

  resultUpdate(){
    const newResult = marked(this.state.input)
    this.setState({
      result: newResult
    })
  }

  render() {
    return (
      <div className="App">
        <div className="input">
          <InputBox
            inputState = {this.state.input}
            inputUpdate = {this.inputUpdate.bind(this)}
            outUpdate = {this.resultUpdate.bind(this)}
          />
        </div>
        <div className="output">
          <OutputBox
            result = {this.state.result}
          />
        </div>
      </div>
    );
  }
}

export default App;
