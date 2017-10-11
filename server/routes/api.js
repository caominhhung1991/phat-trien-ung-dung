const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://caominhhung1991:Hung1991@ds123182.mlab.com:23182/myphamonline', (err, db) => {
        if (err) return console.log(err);
        closure(db);
    })
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message: err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200, data: [], message: null
}
// Get api
// Get users
router.get('/users', (req, res) => {
    console.log("get users api");
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// --------- Product API --------------
// Get list of product
router.get('/products', (req, res) => {
    console.log("get products api");
    connection((db) => {
        db.collection('product')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Add product
router.post('/product', (req, res, next) => {
    var task = req.body;
    console.log("add product api");
    connection((db) => {
        db.collection('product').save(task, (err, task) => {
            if(err) {
                res.send(err);
            }
            res.json(task);
        });
    });
})



module.exports = router;