import './Header.scss'

import React from 'react';
import {Button} from "@mui/material";

const Header = (props) => {

    const logOutAction = () => {
        console.log("logout");
    };

    return (
        <header className="header">
            <div className="header-text">
                <h1 className="header-text-name">Web technologies laboratory work №4</h1>
                <h2 className="header-text-variant">variant 12114</h2>
            </div>

            {props.isLoggedIn &&
                <Button variant="contained" className="header-button" onClick={logOutAction}>
                    Log out
                </Button>}

        </header>
    );

};

export default Header;