import React, { Component } from 'react';
import ReactLoading from "react-loading";
import { Fireworks } from 'fireworks/lib/react'

import Header from '../components/Header';
import Grid_9x9 from '../components/Grid_9x9';
import "./Sudoku.css"
import { problemList } from "../problems"

class Sudoku extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            problem: null,
            gridValues: null,
            selectedGrid: { posY: -1, posX: -1 },
            gameBoardBoarderStyle: "8px solid #000",
            completeFlag: false,
            conflicts: []
        }
    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.hadleKeyDownEvent);
    }

    loadProblem = async (name) => {
        this.setState({
            loading: true,
            problem: null,
            gridValues: null,
            selectedGrid: { posY: -1, posX: -1 }
        });

        const problem = await require(`../problems/${name}`)
        if (problem.content !== undefined) {
            let gridValues = [];
            for (let i = 0; i < problem.content.length; i++)
                gridValues[i] = problem.content[i].slice();
            this.setState({ problem: problem, gridValues: gridValues, loading: false });
        }
    }

    extractArray(array, posX, posY) {
        let rt = []
        for (let i = posY; i < posY + 3; i++) {
            for (let j = posX; j < posX + 3; j++) {
                rt.push(array[i][j])
            }
        }
        return rt;
    }

    handle_grid_1x1_click = (posY, posX) => {
        if (this.state.problem.content[posY][posX] === "0") {
            this.setState({ selectedGrid: { posY: posY, posX: posX } });
        }
    }

    hadleKeyDownEvent = (e) => {
        if (this.state.gridValues !== null && this.state.selectedGrid.posY !== -1 && this.state.selectedGrid.posX !== -1 && ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) || e.code === "Space")) {
            if (this.state.problem.content[this.state.selectedGrid.posY][this.state.selectedGrid.posX] === "0") {
                if (this.isIputValid(this.state.selectedGrid.posY, this.state.selectedGrid.posX, e.key === " " ? "0" : e.key)) {
                    let newgridValues = this.state.gridValues;
                    newgridValues[this.state.selectedGrid.posY][this.state.selectedGrid.posX] = e.key === " " ? "0" : e.key;
                    this.setState({ gridValues: newgridValues });
                    this.checkCompleted(newgridValues);
                } else {
                    this.setState({ gameBoardBoarderStyle: "8px solid #E77" });
                    setTimeout(() => { this.setState({ gameBoardBoarderStyle: "8px solid #333" }); }, 1000);
                }
            }
        }
    }

    isIputValid = (posY, posX, value) => {
        // if (value === "0")
        //     return true;
        // for (let i = 0; i < 9; ++i) {
        //     if (i !== posY && this.state.gridValues[i][posX] === value) {
        //         return false
        //     }
        //     if (i !== posX && this.state.gridValues[posY][i] === value) {
        //         return false
        //     }
        //     for (let j = 0; j < 9; ++j) {
        //         const idx_row = Math.floor(posY / 3) * 3 + Math.floor(j / 3);
        //         const idx_col = Math.floor(posX / 3) * 3 + j % 3;
        //         if (idx_row !== posY && idx_col !== posX && this.state.gridValues[idx_row][idx_col] === value) {
        //             return false
        //         }
        //     }
        // }
        // return true;

        let rt = true;
        let conflicts = [];
        if (value === "0")
            return true;
        for (let i = 0; i < 9; ++i) {
            if (i !== posY && this.state.gridValues[i][posX] === value) {
                rt = false;
                conflicts.push({ posY: i, posX: posX });
            }
            if (i !== posX && this.state.gridValues[posY][i] === value) {
                rt = false;
                conflicts.push({ posY: posY, posX: i });
            }
            for (let j = 0; j < 9; ++j) {
                const idx_row = Math.floor(posY / 3) * 3 + Math.floor(j / 3);
                const idx_col = Math.floor(posX / 3) * 3 + j % 3;
                if (idx_row !== posY && idx_col !== posX && this.state.gridValues[idx_row][idx_col] === value) {
                    rt = false;
                    conflicts.push({ posY: idx_row, posX: idx_col });
                }
            }
        }
        this.setState({ conflicts: conflicts });
        setTimeout(() => { this.setState({ conflicts: [] }); }, 1000);
        return rt;
    }

    checkCompleted = (gridValue) => {
        let completeFlag = true;
        for (let i = 0; i < gridValue.length; ++i) {
            for (let j = 0; j < gridValue[i].length; ++j) {
                if (gridValue[i][j] === "0") {
                    completeFlag = false;
                    break;
                }
            }
        }
        if (completeFlag) {
            this.setState({ completeFlag: true });
            setTimeout(() => { this.setState({ completeFlag: false }); }, 2500);
        }
    }

    updateState = (object) => {
        this.setState(object);
    }

    render() {
        const content = this.state.loading ? (<ReactLoading type={"bars"} color={"#777"} height={"40vh"} width={"40vh"} />) : (
            <div className="gameBoard" style={{ border: this.state.gameBoardBoarderStyle }}>
                <div className="row">
                    <Grid_9x9 handle_grid_1x1_click={this.handle_grid_1x1_click} value={this.extractArray(this.state.gridValues, 0, 0)} fixedValue={this.extractArray(this.state.problem.content, 0, 0)} offsetY={0} offsetX={0} selectedGrid={this.state.selectedGrid} conflicts={this.state.conflicts} />
                    <Grid_9x9 handle_grid_1x1_click={this.handle_grid_1x1_click} value={this.extractArray(this.state.gridValues, 3, 0)} fixedValue={this.extractArray(this.state.problem.content, 3, 0)} offsetY={0} offsetX={3} selectedGrid={this.state.selectedGrid} conflicts={this.state.conflicts} />
                    <Grid_9x9 handle_grid_1x1_click={this.handle_grid_1x1_click} value={this.extractArray(this.state.gridValues, 6, 0)} fixedValue={this.extractArray(this.state.problem.content, 6, 0)} offsetY={0} offsetX={6} selectedGrid={this.state.selectedGrid} conflicts={this.state.conflicts} />
                </div>
                <div className="row">
                    <Grid_9x9 handle_grid_1x1_click={this.handle_grid_1x1_click} value={this.extractArray(this.state.gridValues, 0, 3)} fixedValue={this.extractArray(this.state.problem.content, 0, 3)} offsetY={3} offsetX={0} selectedGrid={this.state.selectedGrid} conflicts={this.state.conflicts} />
                    <Grid_9x9 handle_grid_1x1_click={this.handle_grid_1x1_click} value={this.extractArray(this.state.gridValues, 3, 3)} fixedValue={this.extractArray(this.state.problem.content, 3, 3)} offsetY={3} offsetX={3} selectedGrid={this.state.selectedGrid} conflicts={this.state.conflicts} />
                    <Grid_9x9 handle_grid_1x1_click={this.handle_grid_1x1_click} value={this.extractArray(this.state.gridValues, 6, 3)} fixedValue={this.extractArray(this.state.problem.content, 6, 3)} offsetY={3} offsetX={6} selectedGrid={this.state.selectedGrid} conflicts={this.state.conflicts} />
                </div>
                <div className="row">
                    <Grid_9x9 handle_grid_1x1_click={this.handle_grid_1x1_click} value={this.extractArray(this.state.gridValues, 0, 6)} fixedValue={this.extractArray(this.state.problem.content, 0, 6)} offsetY={6} offsetX={0} selectedGrid={this.state.selectedGrid} conflicts={this.state.conflicts} />
                    <Grid_9x9 handle_grid_1x1_click={this.handle_grid_1x1_click} value={this.extractArray(this.state.gridValues, 3, 6)} fixedValue={this.extractArray(this.state.problem.content, 3, 6)} offsetY={6} offsetX={3} selectedGrid={this.state.selectedGrid} conflicts={this.state.conflicts} />
                    <Grid_9x9 handle_grid_1x1_click={this.handle_grid_1x1_click} value={this.extractArray(this.state.gridValues, 6, 6)} fixedValue={this.extractArray(this.state.problem.content, 6, 6)} offsetY={6} offsetX={6} selectedGrid={this.state.selectedGrid} conflicts={this.state.conflicts} />
                </div>
            </div>
        );

        const fxProps = {
            count: 3,
            interval: 700,
            canvasWidth: window.innerWidth,
            canvasHeight: window.innerHeight,
            colors: ['#cc3333', '#4CAF50', '#81C784'],
            calc: (props, i) => ({
                ...props,
                x: (i + 1) * (window.innerWidth / 3) * Math.random(),
                y: window.innerHeight * Math.random()
            })
        }
        const successAnimation = this.state.completeFlag ? (<Fireworks {...fxProps} />) : null;
        return (
            <>
                <Header problemList={problemList} loadProblem={this.loadProblem} updateState={this.updateState} />
                {content}
                {successAnimation}
            </>
        );
    }
}

export default Sudoku;