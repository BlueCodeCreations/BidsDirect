import React from 'react';
import { Navbar, Button, Container } from 'react-bootstrap';
import NavBar from './NavBar.js';
import LoginForm from './LoginForm.js';
import HomeDataAPI from './HomeDataAPI.js';
import FrontImage from './FrontImage.js';
import '../styles/LoginPage.css';
import BottomBar from './BottomBar.js';

const LoginPage = () => {
    const loginFunc = (user) => {
        console.log(user);
    };

    return (
        <div>
            <NavBar />
            <Container className="mainPage">
                <LoginForm loginFunc={loginFunc} />
                {/* <HomeDataAPI /> */}
                <FrontImage />
            </Container>
            <BottomBar />
        </div>
    );
};



export default LoginPage;
