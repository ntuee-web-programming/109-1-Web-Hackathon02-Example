import React, { Component } from 'react';
import "./Grid.css"

class Grid_1x1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let gridStyle = {
            borderLeft: Math.floor(this.props.PosX / 3) === 0 ? "1.5px solid transparent " : "1.5px solid #AAA",
            borderRight: Math.floor(this.props.PosX / 3) === 2 ? "1.5px solid transparent " : "1.5px solid #AAA",
            borderTop: Math.floor(this.props.PosY / 3) === 0 ? "1.5px solid transparent " : "1.5px solid #AAA",
            borderBottom: Math.floor(this.props.PosY / 3) === 2 ? "1.5px solid transparent " : "1.5px solid #AAA",
        };

        if (this.props.selectedGrid.posY === this.props.posY && this.props.selectedGrid.posX === this.props.posX) {
            gridStyle = { ...gridStyle, backgroundColor: "#333", color: "#FFF" };
        }
        if (this.props.fixed) {
            gridStyle = { ...gridStyle, color: "#E77" };
        }
        if (this.props.conflicted) {
            gridStyle = { ...gridStyle, backgroundColor: "#E77", color: "#FFF" };
        }
        return (
            <div className="grid_1x1" id={`${this.props.PosY}*${this.props.PosX}`} style={gridStyle} onClick={() => this.props.handle_grid_1x1_click(this.props.posY, this.props.posX)}>
                { this.props.value === "0" ? "" : this.props.value}
            </div>
        );
    }
}

export default Grid_1x1;