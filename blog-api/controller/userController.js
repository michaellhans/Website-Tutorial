import request from 'request';
import User from '../models/users.js';

// Create new user
const createUser = (req, res) => {
    User.create(req.body).then(data => res.send(data));
}

// Get all user
const getAllUsers = (req, res) => {
    User.find().then(data => res.send(data));
}

// Get specific user
const getUserByNIM = (req, res) => {
    User.find({
        nim: req.params.nim
    }).then(data => res.send(data));
}

// Update user data
const updateUserByNIM = (req, res) => {
    User.updateOne({
        nim: req.params.nim
    }, req.body).then(data => res.send(data));
}

// Delete user data
const deleteUserByNIM = (req, res) => {
    User.deleteOne({
        nim: req.params.nim
    }).then(data => res.send(data));
}

export default {
    createUser: createUser,
    getAllUsers: getAllUsers,
    getUserByNIM: getUserByNIM,
    updateUserByNIM: updateUserByNIM,
    deleteUserByNIM: deleteUserByNIM,
}