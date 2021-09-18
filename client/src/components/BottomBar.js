import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import '../styles/BottomBar.css';

const BottomBar = () => {
    return (
        <div>
            <header className="bottomBar">
                <div className="navContainer">
                    BidsDirect: Find The Best Fit For Your Next Project
                </div>
            </header>
            <div className="wrapper"></div>
        </div>
    );
};

export default BottomBar;
