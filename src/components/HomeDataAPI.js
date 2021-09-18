import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import '../styles/HomeDataAPI.css';


const HomeDataAPI = () => {
    useEffect(() => {
        axios({
            method: 'post',
            url: 'http://localhost:3000/'
            
        });
    });

    return <div></div>;
};

export default HomeDataAPI;
