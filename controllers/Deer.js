var Deer = require('../models/Deer');
// List of all Deer
exports.Deer_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Deer list');
};
// for a specific Deer.
exports.Deer_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Deer.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Deer create on POST.
exports.Deer_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Deer create POST');
};
// Handle Deer delete form on DELETE.
exports.Deer_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Deer delete DELETE ' + req.params.id);
};
// Handle Deer update form on PUT.
exports.Deer_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Deer.findById(req.params.id)
        // Do updates of properties
        if (req.body.Deer_color) toUpdate.Deer_color = req.body.Deer_color;
        if (req.body.Deer_breed) toUpdate.Deer_breed = req.body.Deer_breed;
        if (req.body.Deer_price) toUpdate.Deer_price = req.body.Deer_price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};
// List of all Deer
exports.Deer_list = async function (req, res) {
    try {
        theDeer = await Deer.find();
        res.send(theDeer);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.Deer_view_all_Page = async function (req, res) {
    try {
        theDeer = await Deer.find();
        res.render('Deer', { title: 'Deer Search Results', results: theDeer });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Deer create on POST.
exports.Deer_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Deer();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.Deer_color = req.body.Deer_color;
    document.Deer_breed = req.body.Deer_breed;
    document.Deer_price = req.body.Deer_price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.Deer_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Deer.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

    exports.Deer_view_one_Page = async function(req, res) {
        console.log("single view for id " + req.query.id)
        try{
        result = await Deer.findById( req.query.id)
        res.render('Deerdetail',
        { title: 'Deer Detail', toShow: result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
        };

// Handle building the view for creating a Deer.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Deer_create_Page = function(req, res) {
console.log("create view")
try{
res.render('Deercreate', { title: 'Deer Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle building the view for updating a Deer.
// query provides the id
exports.Deer_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Deer.findById(req.query.id)
    res.render('Deerupdate', { title: 'Deer Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle a delete one view with id from query
exports.Deer_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Deer.findById(req.query.id)
    res.render('Deerdelete', { title: 'Deer Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    

    

