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
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
/* GET Deer */
router.get('/', Deer_controlers.Deer_view_all_Page );
/* GET detail costume page */
router.get('/detail', Deer_controlers.Deer_view_one_Page);
/* GET create costume page */
router.get('/create',secured, Deer_controlers.Deer_create_Page);
/* GET create update page */
router.get('/update',secured, Deer_controlers.Deer_update_Page);
/* GET delete costume page */
router.get('/delete',secured, Deer_controlers.Deer_delete_Page);
module.exports = router;