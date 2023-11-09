var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Deer_controller = require('../controllers/Deer');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Deer ROUTES ///
// POST request for creating a Deer.
router.post('/Deer', Deer_controller.Deer_create_post);
// DELETE request to delete Deer.
router.delete('/Deer/:id', Deer_controller.Deer_delete);
// PUT request to update Deer.
router.put('/Deer/:id', Deer_controller.Deer_update_put);
// GET request for one Deer.
router.get('/Deer/:id', Deer_controller.Deer_detail);
// GET request for list of all Deer items.
router.get('/Deer', Deer_controller.Deer_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"Deer", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
