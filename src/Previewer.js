import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import TitleBar from "./TitleBar";

class Previewer extends React.Component {
    render() {
        return (<div className={`preview-window ${this.props.windowState}`}>
            <TitleBar title="Previewer" click={this.props.windowSizeChange} />
            <div id="preview">
                <ReactMarkdown remarkPlugins={[remarkGfm]} >{this.props.preview}</ReactMarkdown>
            </div>

        </div>)
    }
}

export default Previewer;