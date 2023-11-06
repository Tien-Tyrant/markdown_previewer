import React from "react";

class TitleBar extends React.Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    click() {
        this.props.click();
    }

    render() {
        return <div className="title-bar">
            <i className="fa fa-tint"></i>{this.props.title}<i className="fa fa-arrows-alt" onClick={this.click}></i>
        </div>
    }
}

export default TitleBar;