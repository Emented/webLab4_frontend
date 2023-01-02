import React from 'react';
import {FormControlLabel, Radio, RadioGroup, TextField} from "@mui/material";

const CoordinatesFields = (props) => {

    return (
        <div className="coordinates-form-fields">
            <RadioGroup row className="coordinates-form-fields-x-radio" value={props.xCoordinate} name="X coordinate">
                <FormControlLabel value={-3} control={<Radio/>} label="-3"/>
                <FormControlLabel value={-2} control={<Radio/>} label="-2"/>
                <FormControlLabel value={-1} control={<Radio/>} label="-1"/>
                <FormControlLabel value={0} control={<Radio/>} label="0"/>
                <FormControlLabel value={1} control={<Radio/>} label="1"/>
                <FormControlLabel value={2} control={<Radio/>} label="2"/>
                <FormControlLabel value={3} control={<Radio/>} label="3"/>
                <FormControlLabel value={4} control={<Radio/>} label="4"/>
                <FormControlLabel value={5} control={<Radio/>} label="5"/>
            </RadioGroup>
            <TextField className="coordinates-form-fields-y-field" variant="outlined" name="Y coordinate"
                       value={props.yCoordinate}
                       label="Y coordinate" type="number"/>
            <RadioGroup row className="coordinates-form-fields-r-radio" defaultValue={1} value={props.rCoordinate}
                        name="R coordinate">
                <FormControlLabel value={-3} control={<Radio/>} label="-3"/>
                <FormControlLabel value={-2} control={<Radio/>} label="-2"/>
                <FormControlLabel value={-1} control={<Radio/>} label="-1"/>
                <FormControlLabel value={0} control={<Radio/>} label="0"/>
                <FormControlLabel value={1} control={<Radio/>} label="1"/>
                <FormControlLabel value={2} control={<Radio/>} label="2"/>
                <FormControlLabel value={3} control={<Radio/>} label="3"/>
                <FormControlLabel value={4} control={<Radio/>} label="4"/>
                <FormControlLabel value={5} control={<Radio/>} label="5"/>
            </RadioGroup>
        </div>
    )

};

export default CoordinatesFields;