const express = require("express");
const app = express();

const routes = require('./routes/posts');
app.use('/posts', routes);

const morgan = require("morgan");
app.use(morgan('dev'));

app.use(express.static(__dirname + "/public"));

// parses url-encoded bodies
app.use(express.urlencoded({ extended: false }));


const { syncAndSeed } = require('./db');

syncAndSeed();

app.get("/", (req, res) => {
    res.redirect("/posts");
});


const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});