import React from 'react';
import '../styles/LoginForm.css';
import { useState, propTypes } from 'react';

const LoginForm = ({ loginFunc }) => {
    const [user, setUser] = useState({ userame: '', password: '' });

    const submitHandler = (e) => {
        e.preventDefault;
        
        // con sole.log();
        loginFunc(user);
    };

    return (
        <div id="loginform">
            <h2 id="headerTitle">Login Form</h2>
            <div>
                <div className="row">
                    <label>Username</label>
                    <input type="text" placeholder="Enter Your Username" />
                </div>
                <div className="row">
                    <label>Password</label>
                    <input type="text" placeholder="Enter Your Password" />
                </div>
                <div id="button" className="row">
                    <button onClick={submitHandler}>Log In</button>
                </div>
                <div id="button" className="row">
                    <button>Create New Account</button>
                </div>
            </div>
        </div>
    );
};

LoginForm.propTypes = {
    loginFunc: propTypes.function.isRequired,
};

export default LoginForm;
