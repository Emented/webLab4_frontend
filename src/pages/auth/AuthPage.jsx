import './AuthPage.scss'

import React from 'react';
import {Box, Tab} from "@mui/material";
import LoginForm from "./components/login/LoginForm";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import RegisterForm from "./components/register/RegisterForm";

const AuthPage = (props) => {
    const [pageId, setPageId] = React.useState("1");

    const handlePageChange = (event, newValue) => {
        setPageId(newValue);
    };

    return (
        <Box className="auth-page-box">
            <div className="auth-page-box-wrapper">
                <div className="tile">
                    <TabContext value={pageId}>
                        <Box className="auth-page-tab-list-box">
                            <TabList variant="fullWidth" onChange={handlePageChange}>
                                <Tab label="Register" value="1"/>
                                <Tab label="Login" value="2"/>
                            </TabList>
                        </Box>
                        <TabPanel className="auth-page-tab-panel" value="1">
                            <RegisterForm/>
                        </TabPanel>
                        <TabPanel className="auth-page-tab-panel" value="2">
                            <LoginForm/>
                        </TabPanel>
                    </TabContext>
                </div>
            </div>
        </Box>
    );

};

export default AuthPage;