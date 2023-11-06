import React from 'react';
import './App.css';
import Editor from './Editor';
import Previewer from './Previewer';
class App extends React.Component {

  initialEdit = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";

  constructor(props) {
    super(props)
    this.state = {
      markdown: this.initialEdit,
      editorWindowState: '',
      previewWindowState: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.windowSizeChange = this.windowSizeChange.bind(this);
  }

  handleChange(content) {
    this.setState({
      markdown: content
    })
  }

  windowSizeChange(windowName) {
    console.log(`clicked from ${windowName}`);
    this.setState(state => ({
      editorWindowState: this.nextState(state.editorWindowState, windowName === 'editor-window'),
      previewWindowState: this.nextState(state.previewWindowState, windowName === 'preview-window'),
    }))
  }

  nextState(currState, isCurrentWindow) {
    if (currState === 'hide' || currState === 'maximize') {
      return '';
    }
    return isCurrentWindow ? 'maximize' : 'hide'
  }

  render() {
    return (
      <div className="App">
        <Editor edit={this.state.markdown} callback={this.handleChange} windowSizeChange={() => this.windowSizeChange('editor-window')} windowState={this.state.editorWindowState} />
        <Previewer preview={this.state.markdown} windowSizeChange={() => this.windowSizeChange('preview-window')} windowState={this.state.previewWindowState} />
      </div>
    );
  }
}
export default App;
