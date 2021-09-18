// import { Mongoose } from 'mongoose';
const mongoose = require('mongoose');

//set up dotenv correctly
const LOCAL_HOST = process.env.HOST;

const connect = () =>
    mongoose.connect('mongodb://localhost:27017/api').then(() => {
        console.log('database connected');
    });

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    accountType: String,
    Projects: Array,
    location: String,
});

const projectSchema = new mongoose.Schema({
    owner: String,
    status: String,
    pictures: Array,
    contractor: String,
    bids: Array,
    type: String,
    location: String,
});

const contractorSchema = new mongoose.Schema({
    company: String,
    capabilities: Array,
    projects: Array,
});

const User = mongoose.model('User', userSchema);
const Project = mongoose.model('Project', projectSchema);
const Contractor = mongoose.model('Contractor', contractorSchema);

module.exports = connect;
