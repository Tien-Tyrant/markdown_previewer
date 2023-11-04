import React from "react";

class TitleBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="title-bar">
            <i className="logo">logo</i>
            <span>{this.props.title}</span>
            <i className="expand-icon">expand</i>
        </div>
    }
}

export default TitleBar;