import React, { Component } from 'react';
import "./Grid.css"

class Grid_1x1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let gridStyle = {
            borderLeft: this.props.posX % 3 === 0 ? "1.5px solid transparent" : "1.5px solid #999",
            borderRight: this.props.posX % 3 === 2 ? "1.5px solid transparent" : "1.5px solid #999",
            borderTop: this.props.posY % 3 === 0 ? "1.5px solid transparent" : "1.5px solid #999",
            borderBottom: this.props.posY % 3 === 2 ? "1.5px solid transparent" : "1.5px solid #999",
        };

        if (this.props.fixed) {
            gridStyle = { ...gridStyle, color: "#666" };
        }

        if (this.props.selectedGrid.posY === this.props.posY && this.props.selectedGrid.posX === this.props.posX) {
            gridStyle = { ...gridStyle, backgroundColor: "#333", color: "#FFF" };
        }


        if (this.props.conflicted) {
            gridStyle = { ...gridStyle, backgroundColor: "#E77", color: "#FFF" };
        }
        return (
            <div className="grid_1x1" id={`${this.props.posY}*${this.props.posX}`} style={gridStyle} onClick={() => this.props.handle_grid_1x1_click(this.props.posY, this.props.posX)}>
                { this.props.value === "0" ? "" : this.props.value}
            </div>
        );
    }
}

export default Grid_1x1;