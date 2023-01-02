import './MainBody.scss'

import React from 'react';
import Graph from "./components/Graph/Graph";
import CoordinatesForm from "./components/CoordinatesForm/CoordinatesForm";
import DataTable from "./components/DataTable/DataTable";

const MainBody = (props) => {

    return (
        <div className="main-body">
            <div className="main-body-inputs">
                <Graph/>
                <CoordinatesForm/>
            </div>
            <div className="main-body-data-table">
                <DataTable/>
            </div>
            <div className="footer-helper"></div>
        </div>
    )
};

export default MainBody;
