import React from 'react';
import { Navbar, Button, Container } from 'react-bootstrap';
import NavBar from './NavBar.js';
import LoginForm from './LoginForm.js';

const LoginPage = () => (
    <div>
        <NavBar />
        <LoginForm />
    </div>
);

export default LoginPage;
