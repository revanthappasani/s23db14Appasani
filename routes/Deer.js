// var express = require('express');
// var router = express.Router();
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Deer', { title: 'Search Results Deer' });
// });
// module.exports = router;
var express = require('express');
const Deer_controlers= require('../controllers/Deer');
var router = express.Router();
/* GET Deer */
router.get('/', Deer_controlers.Deer_view_all_Page );
module.exports = router;
