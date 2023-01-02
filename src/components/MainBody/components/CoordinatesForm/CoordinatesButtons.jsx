import React from 'react';
import {Button} from "@mui/material";

const CoordinatesButtons = (props) => {

    return (
        <div className="coordinates-form-buttons">
            <Button className="coordinates-form-buttons-check" variant="outlined">
                Check
            </Button>
            <Button className="coordinates-form-buttons-reset" variant="outlined">
                Reset
            </Button>
        </div>
    )

};

export default CoordinatesButtons;