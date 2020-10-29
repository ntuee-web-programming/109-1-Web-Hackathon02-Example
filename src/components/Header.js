import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function Header(props) {
    const classes = useStyles();
    const [proplem, setPreblem] = React.useState('');

    const handleChange = (event) => {
        setPreblem(event.target.value);
        console.log(event.target.value)
        props.loadProblem(String(event.target.value));
    };
    const problemList = props.problemList.map(p => <MenuItem value={p}>{p}</MenuItem>)
    return (
        <div className="title" style={{ fontSize: "6vh", margin: "3vh", color: "#666" }}>
            <div><b>My Sudoku</b></div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Problem</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={proplem}
                    onChange={handleChange}
                    label="Problem"
                    autoWidth
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {problemList}
                </Select>
            </FormControl>
        </div>

    );
}
