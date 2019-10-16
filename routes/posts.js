const express = require('express');
const router = express.Router();

const client = require("../db");
const addPost = require("../views/addPost");
const postDetails = require("../views/postDetails");
const postList = require("../views/postList");

const { User, Post } = require("../db");

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded());


router.get("/", async (req, res, next) => {
    posts = await Post.findAll({
        include: [{
            model: User,
            as: 'author'
        }]
    });
    res.send(postList(posts));
});

router.get("/:id", async (req, res, next) => {
    if(req.params.id === 'new'){
        res.send(addPost());
    } else {
        post = await Post.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: User,
                as: 'author'
            }]
        })
        res.send(postDetails(post));
    }
});


module.exports = router;