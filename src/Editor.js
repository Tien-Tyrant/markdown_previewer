import React from 'react';
import TitleBar from './TitleBar';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.click = this.click.bind(this);
    }

    handleChange(e) {
        if (e) {
            this.props.callback(e.target.value)
        }
    }

    click() {
        this.props.windowSizeChange();
    }

    render() {
        return (<div className='sub-window editor-window'>
            <TitleBar title="Editor" click={this.click} />
            <textarea type="text" id="editor" onChange={this.handleChange}>{this.props.edit}</textarea>
        </div>);
    }
}

export default Editor;