import React, { Component } from 'react';
import "./Grid.css"

class Grid_1x1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
    }
    render() {
        const gridStyle = {border: "2px solid #888"};
        return (
            <div className="grid_1x1" style={gridStyle}>
                {this.props.value}
            </div>
        );
    }
}

export default Grid_1x1;
