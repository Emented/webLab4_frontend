import './AuthBody.scss'

import React from 'react';
import {Box, Tab} from "@mui/material";
import LoginForm from "./components/LoginForm/LoginForm";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const AuthBody = (props) => {
    const [bodyId, setbodyId] = React.useState("1");

    const handlebodyChange = (event, newValue) => {
        setbodyId(newValue);
    };

    return (
        <Box className="auth-body-box">
            <div className="auth-body-box-wrapper">
                <div className="tile">
                    <TabContext value={bodyId}>
                        <Box className="auth-body-tab-list-box">
                            <TabList variant="fullWidth" onChange={handlebodyChange}>
                                <Tab label="Register" value="1"/>
                                <Tab label="Login" value="2"/>
                            </TabList>
                        </Box>
                        <TabPanel className="auth-body-tab-panel" value="1">
                            <RegisterForm/>
                        </TabPanel>
                        <TabPanel className="auth-body-tab-panel" value="2">
                            <LoginForm/>
                        </TabPanel>
                    </TabContext>
                </div>
            </div>
        </Box>
    );

};

export default AuthBody;