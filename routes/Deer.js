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
/* GET detail costume page */
router.get('/detail', Deer_controlers.Deer_view_one_Page);
/* GET create costume page */
router.get('/create', Deer_controlers.Deer_create_Page);
/* GET create update page */
router.get('/update', Deer_controlers.Deer_update_Page);
/* GET delete costume page */
router.get('/delete', Deer_controlers.Deer_delete_Page);
module.exports = router;
