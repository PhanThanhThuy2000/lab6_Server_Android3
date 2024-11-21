const mongoose = require('mongoose');
// code 4/4/2024
const local = 'mongodb+srv://admin:XnhO4OkWyQG7s7nh@cluster0.zb6gn.mongodb.net/lab6';

const connect = async() => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };