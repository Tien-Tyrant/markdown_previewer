import React from "react";

class TitleBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false
        }
        this.click = this.click.bind(this);
    }

    click() {
        this.props.click();
        this.setState(state => ({
            expand: !state.expand
        }))
    }

    render() {
        return (<div className="title-bar">
            <i className="fa fa-tint"></i>{this.props.title}<i className={this.state.expand ? "fa fa-compress" : "fa fa-arrows-alt"} onClick={this.click}></i>
        </div>)
    }
}

export default TitleBar;