import './CoordinatesForm.scss'

import React from 'react';
import CoordinatesFields from "./CoordinatesFields";
import CoordinatesButtons from "./CoordinatesButtons";

const CoordinatesForm = (props) => {

    return (
        <div className="coordinates-form tile">

            <CoordinatesFields/>
            <CoordinatesButtons/>

        </div>
    )


};

export default CoordinatesForm;