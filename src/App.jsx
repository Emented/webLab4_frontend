import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AuthPage from "./pages/auth/AuthPage";

const App = () => {
    return (
        <div>
            <Header isLoggedIn={true}/>
            <AuthPage/>
            <Footer/>
        </div>
    );
};

export default App;