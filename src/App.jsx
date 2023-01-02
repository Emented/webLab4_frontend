import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AuthBody from "./components/AuthBody/AuthBody";
import MainBody from "./components/MainBody/MainBody";

const App = () => {
    return (
        <div>
            <Header isLoggedIn={true}/>
            {/*<AuthBody/>*/}
            <MainBody/>
            <Footer/>
        </div>
    );
};

export default App;