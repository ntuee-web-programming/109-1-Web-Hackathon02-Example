import React, { Component } from 'react';
import Grid_1x1 from '../components/Grid_1x1';
import "./Grid.css"

export default function InputKeyBoard(props) {

    return (
        <div className="input-keyboard">
            <Grid_1x1 value={"0"} fixed={true} posY={1} posX={0} handle_grid_1x1_click={props.handle_grid_1x1_click} selectedGrid={props.selectedGrid} conflicted={false} />
            <Grid_1x1 value={"1"} fixed={true} posY={1} posX={1} handle_grid_1x1_click={props.handle_grid_1x1_click} selectedGrid={props.selectedGrid} conflicted={false} />
            <Grid_1x1 value={"2"} fixed={true} posY={1} posX={2} handle_grid_1x1_click={props.handle_grid_1x1_click} selectedGrid={props.selectedGrid} conflicted={false} />
        </div>
    );
}
