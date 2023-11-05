import React from "react";

class TitleBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="title-bar">
            <i className="fa fa-tint"></i>
            {this.props.title}
            <i className="fa fa-arrows-alt"></i>
        </div>
    }
}

export default TitleBar;