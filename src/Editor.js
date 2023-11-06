import React from 'react';
import TitleBar from './TitleBar';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        if (e) {
            this.props.callback(e.target.value)
        }
    }

    render() {
        return (<div className={`editor-window ${this.props.windowState}`}>
            <TitleBar title="Editor" click={this.props.windowSizeChange} />
            <textarea type="text" id="editor" onChange={this.handleChange}>{this.props.edit}</textarea>
        </div>);
    }
}

export default Editor;