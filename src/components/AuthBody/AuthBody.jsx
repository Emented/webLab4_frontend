import './AuthBody.scss'

import React from 'react';
import {Tab} from "@mui/material";
import LoginForm from "./components/LoginForm/LoginForm";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const AuthBody = (props) => {
    const [bodyId, setBodyId] = React.useState("1");

    const handleBodyChange = (event, newValue) => {
        setBodyId(newValue);
    };

    return (
        <div className="auth-body">
            <div className="auth-body-wrapper">
                <div className="tile">
                    <TabContext value={bodyId}>
                        <div className="auth-body-tab-list">
                            <TabList variant="fullWidth" onChange={handleBodyChange}>
                                <Tab label="Register" value="1"/>
                                <Tab label="Login" value="2"/>
                            </TabList>
                        </div>
                        <TabPanel className="auth-body-tab-panel" value="1">
                            <RegisterForm/>
                        </TabPanel>
                        <TabPanel className="auth-body-tab-panel" value="2">
                            <LoginForm/>
                        </TabPanel>
                    </TabContext>
                </div>
            </div>
        </div>
    );

};

export default AuthBody;