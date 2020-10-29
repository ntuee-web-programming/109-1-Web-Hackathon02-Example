import React, { Component } from 'react';
import ReactLoading from "react-loading";

import Title from '../components/Title';
import Grid_9x9 from '../components/Grid_9x9';
import "./Sudoku.css"

class Sudoku extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    componentDidMount = () => {
        this.loadProblen('sample01');

    }

    loadProblen = async (name) => {
        const problem = await require(`../problems/${name}.json`)
        this.setState({ problem: problem, loading: false });
    }

    render() {
        console.log(this.state.problem)
        if (this.state.loading) {
            return (
                <>
                    <ReactLoading type={"bars"} color={"#777"} height={"50vw"} width={"50vw"} />
                </>
            );
        } else {
            return (
                <>
                    <Title />
                    <div>
                        <div className="row">
                            <Grid_9x9 value={this.state.problem.content[0]} />
                            <Grid_9x9 value={this.state.problem.content[1]} />
                            <Grid_9x9 value={this.state.problem.content[2]} />
                        </div>
                        <div className="row">
                            <Grid_9x9 value={this.state.problem.content[3]} />
                            <Grid_9x9 value={this.state.problem.content[4]} />
                            <Grid_9x9 value={this.state.problem.content[5]} />
                        </div>
                        <div className="row">
                            <Grid_9x9 value={this.state.problem.content[6]} />
                            <Grid_9x9 value={this.state.problem.content[7]} />
                            <Grid_9x9 value={this.state.problem.content[8]} />
                        </div>
                    </div>
                </>
            );
        }
    }
}

export default Sudoku;