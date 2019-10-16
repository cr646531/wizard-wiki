//set up app
const express = require("express");
const app = express();

//import router
const routes = require('./routes/posts');
app.use('/posts', routes);

//import middleware
const morgan = require("morgan");
app.use(morgan('dev'));

//set up static routing
app.use(express.static(__dirname + "/public"));

//parses url-encoded bodies
app.use(express.urlencoded({ extended: false }));

//import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

//import User model, Post model, and syncAndSeed function
const { syncAndSeed, User, Post } = require('./db');

syncAndSeed();

app.get("/", (req, res) => {
    res.redirect("/posts");
});

const addPost = require('./views/addPost');

app.get("/add", (req, res) => {
    res.send(addPost());
});

app.post("/add", async (req, res, nex) => {

  let title, name;

  if(!req.body.title){
      title = 'Untitled';
  } else {
      title = req.body.title;
  }

  if(!req.body.name){
      name = 'Anonymous';
  } else {
      name = req.body.name;
  }

  let post = await Post.create({ title: title, content: req.body.content });
  
  let user = await User.findOrCreate({ where: { name: name }});

  post.setAuthor(user[0]);
  res.redirect("/");
  
});


const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});