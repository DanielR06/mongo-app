const { getAll, create, getOne, remove, update } = require('../controllers/post.controller');
const express = require('express');

const postRouter = express.Router();

postRouter.route('/')
    .get(getAll)
    .post(create);

postRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = postRouter;