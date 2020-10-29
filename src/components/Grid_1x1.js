import React, { Component } from 'react';
import "./Grid.css"

class Grid_1x1 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        if (this.props.value === "0") {
            this.setState({ fixed: false });
        } else {
            this.setState({ fixed: true });
        }
    }

    render() {
        let gridStyle = {
            borderLeft: this.props.gridPosX === "LEFT" ? "1.5px solid transparent " : "1.5px solid #AAA",
            borderRight: this.props.gridPosX === "RIGHT" ? "1.5px solid transparent " : "1.5px solid #AAA",
            borderTop: this.props.gridPosY === "TOP" ? "1.5px solid transparent " : "1.5px solid #AAA",
            borderBottom: this.props.gridPosY === "BOTTOM" ? "1.5px solid transparent " : "1.5px solid #AAA",
        };

        if (this.props.selectedGrid.posY === this.props.posY && this.props.selectedGrid.posX === this.props.posX) {
            gridStyle = { ...gridStyle, backgroundColor: "#333", color: "#FFF" };
        }
        if (this.state.fixed) {
            gridStyle = { ...gridStyle, color: "#E77" };
        }
        
        return (
            <div className="grid_1x1" style={gridStyle} onClick={() => this.props.handle_grid_1x1_click(this.props.posY, this.props.posX)}>
                { this.props.value === "0" ? "" : this.props.value}
            </div>
        );
    }
}

export default Grid_1x1;