import './DataTable.scss'

import React, {useEffect} from 'react';
import {DataGrid} from "@mui/x-data-grid";
import {fetchGetAllHits} from "../../../../redux/actions";
import {connect} from "react-redux";

const columns = [
    {
        field: 'xCoordinate',
        headerName: 'X',
        width: 100,
        align: 'center',
        headerAlign: 'center'
    },
    {
        field: 'yCoordinate',
        headerName: 'Y',
        width: 100,
        align: 'center',
        headerAlign: 'center'
    },
    {
        field: 'rCoordinate',
        headerName: 'R',
        width: 100,
        align: 'center',
        headerAlign: 'center'
    },
    {
        field: 'checkDate',
        headerName: 'Check date',
        width: 256,
        align: 'center',
        headerAlign: 'center'
    },
    {
        field: 'executionTime',
        headerName: 'Execution time',
        width: 225,
        align: 'center',
        headerAlign: 'center'
    },
    {
        field: 'status',
        headerName: 'Result',
        width: 225,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (params) =>
            params.row.status ? "Hit" : "Miss",
    },
];

const date = new Date().toISOString().slice(0, 19).replace('T', ' ')

const rows = [
    {id: 1, xCoordinate: 1.25, yCoordinate: 2.25, rCoordinate: 1, checkDate: date, executionTime: 120, status: true},
    {id: 2, xCoordinate: 1.25, yCoordinate: 2.25, rCoordinate: 2, checkDate: date, executionTime: 120, status: false},
    {id: 3, xCoordinate: 1.25, yCoordinate: 2.25, rCoordinate: 3, checkDate: date, executionTime: 120, status: true},
    {id: 4, xCoordinate: 1.25, yCoordinate: 2.25, rCoordinate: -1, checkDate: date, executionTime: 120, status: false},
    {id: 5, xCoordinate: 1.25, yCoordinate: 2.25, rCoordinate: 2, checkDate: date, executionTime: 120, status: true},
    {id: 6, xCoordinate: 1.25, yCoordinate: 2.25, rCoordinate: 4, checkDate: date, executionTime: 120, status: true},
    {id: 7, xCoordinate: 1.25, yCoordinate: 2.25, rCoordinate: 2, checkDate: date, executionTime: 120, status: true},
    {id: 8, xCoordinate: 1.25, yCoordinate: 2.25, rCoordinate: 2, checkDate: date, executionTime: 120, status: true},
    {id: 9, xCoordinate: 1.25, yCoordinate: 2.25, rCoordinate: 2, checkDate: date, executionTime: 120, status: true},
];

const DataTable = (props) => {

    useEffect(props.fetchGetAllHits);

    return (
        <div className="data-grid">
            <DataGrid
                rows={props.tableHitsList}
                columns={columns}
                pageSize={4}
                rowsPerPageOptions={[4]}
                disableSelectionOnClick
                disableColumnFilter
                disableColumnMenu
                disableColumnSelector
                disableDensitySelector
            />
        </div>
    );

};

const mapStateToDataTableProps = (state) => {
    return {
        tableHitsList: state.tableHitsList
    }
}

const mapDispatchToDataTableProps = (dispatch) => {
    return {
        fetchGetAllHits: () => {
            dispatch(fetchGetAllHits())
        }
    }
}

export default connect(mapStateToDataTableProps, mapDispatchToDataTableProps)(DataTable);