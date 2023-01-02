import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AuthBody from "./components/AuthBody/AuthBody";

const App = () => {
    return (
        <div>
            <Header isLoggedIn={true}/>
            <AuthBody/>
            <Footer/>
        </div>
    );
};

export default App;