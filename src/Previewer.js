import React from "react";
import TitleBar from "./TitleBar";

class Previewer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="sub-window previewer-window">
            <TitleBar title="Previewer" />
        </div>)
    }
}

export default Previewer;