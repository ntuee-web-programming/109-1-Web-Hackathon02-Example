import React, { Component } from 'react';
import Grid_1x1 from '../components/Grid_1x1';
import "./Grid.css"

class Grid_9x9 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="grid_9x9" style={{border: "2px solid"}}>
                <div className="row">
                    <Grid_1x1 value={this.props.value[0]}/>
                    <Grid_1x1 value={this.props.value[1]}/>
                    <Grid_1x1 value={this.props.value[2]}/>
                </div>
                <div className="row">
                    <Grid_1x1 value={this.props.value[3]}/>
                    <Grid_1x1 value={this.props.value[4]}/>
                    <Grid_1x1 value={this.props.value[5]}/>
                </div>
                <div className="row">
                    <Grid_1x1 value={this.props.value[6]}/>
                    <Grid_1x1 value={this.props.value[7]}/>
                    <Grid_1x1 value={this.props.value[8]}/>
                </div>
            </div>
        );
    }
}

export default Grid_9x9;
