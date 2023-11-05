import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import TitleBar from "./TitleBar";

class Previewer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="sub-window previewer-window">
            <TitleBar title="Previewer" />
            <div id="preview">
                <ReactMarkdown remarkPlugins={[remarkGfm]} >{this.props.preview}</ReactMarkdown>
            </div>

        </div>)
    }
}

export default Previewer;