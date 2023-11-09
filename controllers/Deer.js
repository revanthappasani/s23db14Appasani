var Deer = require('../models/Deer');
// List of all Deer
exports.Deer_list = function(req, res) {
res.send('NOT IMPLEMENTED: Deer list');
};
// for a specific Deer.
exports.Deer_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Deer detail: ' + req.params.id);
};
// Handle Deer create on POST.
exports.Deer_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Deer create POST');
};
// Handle Deer delete form on DELETE.
exports.Deer_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Deer delete DELETE ' + req.params.id);
};
// Handle Deer update form on PUT.
exports.Deer_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Deer update PUT' + req.params.id);
};
// List of all Deer
exports.Deer_list = async function(req, res) {
    try{
    theDeer = await Deer.find();
    res.send(theDeer);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    