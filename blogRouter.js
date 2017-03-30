/**
 * Created by Admin on 3/28/2017.
 */
const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const jasonParser = bodyparser.json();
const {BlogPosts} = require('./models');

BlogPosts.create('My First Post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum dolor metus, placerat facilisis lorem placerat eu. Curabitur hendrerit rhoncus egestas. Vestibulum sed felis eget purus faucibus placerat nec sit amet risus. Vestibulum finibus volutpat leo sit amet ornare. Praesent augue diam, sodales non nunc ut, mattis molestie elit. Nam aliquet porttitor neque nec sodales. Integer posuere tellus vitae commodo consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin ullamcorper erat vitae nulla luctus lobortis. Aliquam sollicitudin ac sem sit amet scelerisque. Etiam sem tellus, efficitur nec viverra sed, lobortis sit amet elit. Nullam facilisis egestas consequat. In a magna non lectus cursus interdum. Ut id dui magna. Nulla eros justo, consectetur in elementum a, ullamcorper in urna \nCurabitur aliquam, odio sagittis faucibus feugiat, augue elit congue nibh, non tempor dolor nunc non diam. Sed ex quam, maximus ac nisi id, congue elementum neque. Mauris tincidunt magna sem, efficitur euismod nunc auctor rutrum. Curabitur commodo laoreet urna ut pulvinar. Praesent varius turpis vel quam pulvinar dapibus. Ut facilisis nunc tincidunt velit luctus congue. Aliquam tortor libero, ullamcorper congue libero eget, ornare finibus lectus. Nam semper convallis risus, eget vulputate augue ullamcorper non. Integer scelerisque facilisis ligula vel cursus. Morbi diam ipsum, luctus in justo eu, pretium pellentesque libero. In libero urna, pulvinar sit amet dolor at, hendrerit viverra magna. Maecenas fringilla, nunc et sagittis ornare, nisi ex sagittis neque, sit amet sodales neque nulla vel tortor. Vivamus sed nunc libero. Etiam dui purus, rutrum quis mi ut, placerat bibendum turpis. Donec consequat erat quam, quis facilisis dui vestibulum in.', 'Dexter Lewis');

//send back response to retrieve all blog entries
router.get('/', (req, res)=> {
   res.json(BlogPosts.get());
});

router.delete('/:id', (req, res)=> {
   BlogPosts.delete(req.params.id);
   console.log(`Deleted blog item ${req.params.id}`);
   res.status(204).end();
});


module.exports = router;