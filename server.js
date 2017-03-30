/**
 * Created by Admin on 3/28/2017.
 */
const express = require('express');
const router = express.Router();
const morgon = require('morgan');
const bodyParser = require('body-parser');
const {BlogPost} = require('./models');
const blogRouter = require('./blogRouter');
const app = express();

app.use(morgon('common'));
app.use('/blog-posts',  blogRouter);



app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});