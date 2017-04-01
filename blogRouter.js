/**
 * Created by Admin on 3/28/2017.
 */
const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const jasonParser = bodyparser.json();
const {BlogPosts} = require('./models');

BlogPosts.create('My First Post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum dolor metus, placerat facilisis lorem placerat eu. Curabitur hendrerit rhoncus egestas. Vestibulum sed felis eget purus faucibus placerat nec sit amet risus. Vestibulum finibus volutpat leo sit amet ornare. Praesent augue diam, sodales non nunc ut, mattis molestie elit. Nam aliquet porttitor neque nec sodales. Integer posuere tellus vitae commodo consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proi.', 'Dexter Lewis');
BlogPosts.create('My Second Post', 'Blog content', 'Dexter Lewis');


//send back response to retrieve all blog entries
router.get('/', (req, res)=> {
   res.json(BlogPosts.get());
});

router.delete('/:id', (req, res)=> {
   BlogPosts.delete(req.params.id);
   console.log(`Deleted blog item ${req.params.id}`);
   res.status(204).end();
});

router.post ('/', jasonParser, (req, res) =>{
   const requiredFields = ['title', 'content', 'author', 'publishDate'];
   for (let i = 0;  i < requiredFields.length;  i++ ) {
       const field = requiredFields[i];
       if (!(field in req.body)) {
           const message = `Missing ${field} in request body`;
           console.error(message);
           return res.status(400).send(message);
       }
   }
    const blogEntry = BlogPosts.create(req.body.title, req.body.content, req.body.author, req.body.publishDate);
   res.status(201).json(blogEntry);
});

router.put ('/:id', jasonParser, (req, res) => {
    const requireFields = ['title', 'content', 'author', 'publishDate'];
    for (let i=0; i< requireFields.length; i++) {
        const field = requireFields[i];
        if (!(field in req.body)) {
            const message = `Missing ${field} in request body`;
            console.error(message);
            return res.status(400).send(message);
        }
    }
   if (req.params.id !== req.body.id) {
        const message = (
            `Request path id (${req.params.id} and request body id`
            `(${req.body.id} must match`);
        console.error(message);
        return res.status(400).send(message);
   }
   console.log(`Updating blog entry ( ${req.params.id}`);
   const  updateEntry = BlogPosts.update( {
       id: req.params.id,
       name: req.body.name,
       content: req.body.content,
       author: req.body.author,
       publishDate: req.body.publishDate
   });
    res.status(204).jason(updateEntry);


});




module.exports = router;