import React, { Component } from 'react';
import Grid_1x1 from '../components/Grid_1x1';
import "./Grid.css"

export default function InputKeyBoard(props) {
    return (
        <div className="input-keyboard" style={{ display: "flex", flexDirection: "row", margin: "2vh" }}>
            <Grid_1x1 value={"1"} fixed={true} posY={1} posX={1} handle_grid_1x1_click={() => props.hadleKeyDownEvent({ key: "0", keyCode: 48 })} selectedGrid={props.selectedGrid} conflicted={false} />
            <Grid_1x1 value={"2"} fixed={true} posY={1} posX={1} handle_grid_1x1_click={() => props.hadleKeyDownEvent({ key: "1", keyCode: 49 })} selectedGrid={props.selectedGrid} conflicted={false} />
            <Grid_1x1 value={"3"} fixed={true} posY={1} posX={1} handle_grid_1x1_click={() => props.hadleKeyDownEvent({ key: "2", keyCode: 50 })} selectedGrid={props.selectedGrid} conflicted={false} />
            <Grid_1x1 value={"4"} fixed={true} posY={1} posX={1} handle_grid_1x1_click={() => props.hadleKeyDownEvent({ key: "3", keyCode: 51 })} selectedGrid={props.selectedGrid} conflicted={false} />
            <Grid_1x1 value={"5"} fixed={true} posY={1} posX={1} handle_grid_1x1_click={() => props.hadleKeyDownEvent({ key: "5", keyCode: 53 })} selectedGrid={props.selectedGrid} conflicted={false} />
            <Grid_1x1 value={"6"} fixed={true} posY={1} posX={1} handle_grid_1x1_click={() => props.hadleKeyDownEvent({ key: "6", keyCode: 54 })} selectedGrid={props.selectedGrid} conflicted={false} />
            <Grid_1x1 value={"7"} fixed={true} posY={1} posX={1} handle_grid_1x1_click={() => props.hadleKeyDownEvent({ key: "7", keyCode: 55 })} selectedGrid={props.selectedGrid} conflicted={false} />
            <Grid_1x1 value={"8"} fixed={true} posY={1} posX={1} handle_grid_1x1_click={() => props.hadleKeyDownEvent({ key: "8", keyCode: 56 })} selectedGrid={props.selectedGrid} conflicted={false} />
            <Grid_1x1 value={"9"} fixed={true} posY={1} posX={1} handle_grid_1x1_click={() => props.hadleKeyDownEvent({ key: "9", keyCode: 57 })} selectedGrid={props.selectedGrid} conflicted={false} />
        </div>
    );
}