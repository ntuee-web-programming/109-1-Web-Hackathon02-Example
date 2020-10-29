import React, { Component } from 'react';
import Grid_1x1 from '../components/Grid_1x1';
import "./Grid.css"

class Grid_9x9 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="grid_9x9">
                <div className="row">
                    <Grid_1x1 value={this.props.value[0]} posY={this.props.offsetY + 0} posX={this.props.offsetX + 0} gridPosX="LEFT" gridPosY="TOP" handle_grid_1x1_click={this.props.handle_grid_1x1_click} selectedGrid={this.props.selectedGrid} />
                    <Grid_1x1 value={this.props.value[1]} posY={this.props.offsetY + 0} posX={this.props.offsetX + 1} gridPosX="CENTER" gridPosY="TOP" handle_grid_1x1_click={this.props.handle_grid_1x1_click} selectedGrid={this.props.selectedGrid} />
                    <Grid_1x1 value={this.props.value[2]} posY={this.props.offsetY + 0} posX={this.props.offsetX + 2} gridPosX="RIGHT" gridPosY="TOP" handle_grid_1x1_click={this.props.handle_grid_1x1_click} selectedGrid={this.props.selectedGrid} />
                </div>
                <div className="row">
                    <Grid_1x1 value={this.props.value[3]} posY={this.props.offsetY + 1} posX={this.props.offsetX + 0} gridPosX="LEFT" gridPosY="CENTER" handle_grid_1x1_click={this.props.handle_grid_1x1_click} selectedGrid={this.props.selectedGrid} />
                    <Grid_1x1 value={this.props.value[4]} posY={this.props.offsetY + 1} posX={this.props.offsetX + 1} gridPosX="CENTER" gridPosY="CENTER" handle_grid_1x1_click={this.props.handle_grid_1x1_click} selectedGrid={this.props.selectedGrid} />
                    <Grid_1x1 value={this.props.value[5]} posY={this.props.offsetY + 1} posX={this.props.offsetX + 2} gridPosX="RIGHT" gridPosY="CENTER" handle_grid_1x1_click={this.props.handle_grid_1x1_click} selectedGrid={this.props.selectedGrid} />
                </div>
                <div className="row">
                    <Grid_1x1 value={this.props.value[6]} posY={this.props.offsetY + 2} posX={this.props.offsetX + 0} gridPosX="LEFT" gridPosY="BOTTOM" handle_grid_1x1_click={this.props.handle_grid_1x1_click} selectedGrid={this.props.selectedGrid} />
                    <Grid_1x1 value={this.props.value[7]} posY={this.props.offsetY + 2} posX={this.props.offsetX + 1} gridPosX="CENTER" gridPosY="BOTTOM" handle_grid_1x1_click={this.props.handle_grid_1x1_click} selectedGrid={this.props.selectedGrid} />
                    <Grid_1x1 value={this.props.value[8]} posY={this.props.offsetY + 2} posX={this.props.offsetX + 2} gridPosX="RIGHT" gridPosY="BOTTOM" handle_grid_1x1_click={this.props.handle_grid_1x1_click} selectedGrid={this.props.selectedGrid} />
                </div>
            </div>
        );
    }
}

export default Grid_9x9;