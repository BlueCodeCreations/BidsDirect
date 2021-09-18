// import { Mongoose } from 'mongoose';
const mongoose = require('mongoose');

const LOCAL_HOST = process.env.HOST;

mongoose.connect(`http://${LOCAL_HOST}:27107/data`).then(() => {
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
