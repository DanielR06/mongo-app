const catchError = require('../utils/catchError');
const Post = require('../models/Post');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const results = await Post.find({}).populate('user');
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const {title, description, user} = req.body
    const post = await Post.create({title, description, user});
    const userObject = await User.findById(user);
    userObject.posts.push(post);
    await userObject.save();
    return res.status(201).json(post);
});

const getOne = catchError(async(req, res) => {
    
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}   