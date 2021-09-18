import React from 'react';
import '../styles/LoginForm.css';

const LoginForm = () => {
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
                    <button>Log In</button>
                </div>
                <div id="button" className="row">
                    <button>Create New Account</button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
