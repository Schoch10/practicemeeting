var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var indexPage = 'index';
  var options = {};
 // res.sendFile('/Users/brendans/Desktop/practicem_meeting_example/dashboard/views/index.html');
  res.render(indexPage, {} , function (err) {
    if (err) {
        console.log(err);
        res.status(err.status).end();    
    } else {
        console.log('Sent', indexPage);
        console.log('test2');
    } 
  }); 
});    
        
module.exports = router;