import React from 'react';
import TitleBar from './TitleBar';

class Editor extends React.Component {
    constructor(prop) {
        super(prop);
    }

    render() {
        return (<div className='sub-window editor-window'>
            <TitleBar title="Editor"/>
        </div>);
    }
}

export default Editor;