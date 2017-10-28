const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectId;

var url = "mongodb://caominhhung1991:Hung1991@ds123182.mlab.com:23182/myphamonline";
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
    response.message = typeof err == 'object' ? err.message : err;
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

// --------- San pham - Product API --------------
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

router.get('/product/:id', (req, res, next)  => {
    var request = {'_id': new ObjectID(req.params.id)};
    connection((db) => {
        db.collection('product')
            .findOne(request, (err, product) => {
                if (err) {
                    res.send(err);
                }
                res.json(product);
            });
    });
});

// Add product
router.post('/product', (req, res, next) => {
    var task = req.body;
    console.log("add product api");
    connection((db) => {
        db.collection('product').save(task, (err, task) => {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    });
})

// Update product
router.put('/product/:id', (req, res, next) => {
    var productUpdate = req.body;
    productUpdate._id = new ObjectID(productUpdate._id);
    console.log("update product api");
    console.log(req.params.id);
    var request = {'_id': new ObjectID(req.params.id)};
    connection((db) => {
        db.collection('product')
            .update(request, productUpdate, {save:true}, (err, product) => {
                if (err) {
                    res.send(err);
                }
                res.json(product);
                console.log(product);
            });
    });
});

// delete product 
router.delete('/product/:id', (req, res, next) => {
    console.log("delete product api");
    var request = {'_id': new ObjectID(req.params.id)};
    connection((db) => {
        db.collection('product')
            .remove(request, (err, product)=> {
                if(err) {
                    res.send(err);
                }
                res.json(product);
            })
    })
});


// --- Phiếu nhập kho - purchase - purchasing ---
// Add one purchasing
router.post('/purchasing', (req, res, next) => {
    var purchase = req.body;
    console.log("add purchase order to purchasing");
    connection((db) => {
        db.collection("purchasing")
            .save(purchase, (err, aa) => {
                if(err) {
                    res.send(err);
                }
                res.json(aa);
            })
            // .catch(err => {
            //     sendError(err, res);
            // })
    })
});

// --- Kho - inventory ---
// Get one product from inventory
router.get('/inventory/:id', (req, res, next) => {
    console.log("get 1 product from inventory!")
    var request = {'_id': new ObjectID(req.params.id)};
    connection((db) => {
        db.collection('inventory')
            .findOne(request, (err, product) => {
                if (err) {
                    res.send(err);
                }
                res.json(product);
            });
    });
});
// // Add one product to inventory
router.post('/inventory', (req, res, next) => {
    console.log("Add one product to inventory");
    var product = req.body;
    product._id = new ObjectID(product._id);
    connection(db => {
        db.collection("inventory")
            .save(product)
            .then(res.json())
    });
});

// Update one product to inventory
router.put('/inventory/:id', (req, res, next) => {
    console.log("Update one product to inventory");
    var product = req.body;
    product._id = new ObjectID(product._id);
    var request = {'_id': new ObjectID(req.params.id)};
    connection((db) => {
        db.collection('inventory')
            .update(request, product, {save:true}, (err, product) => {
                if (err) {
                    res.send(err);
                }
                res.json(product);
            });
    });
});

// --- List product by join ---
// Get list of products
router.get('/products-guest', (req, res, next) => {
    console.log("get products guest by join api");
    connection((db) => {
        db.collection('product')
            .aggregate([
                { $lookup:
                    {
                        from: 'inventory',
                        localField: '_id',
                        foreignField: '_id',
                        as: 'sub_prod'
                    }
                }
            ])
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

// --- Users ---
// Registration
router.post('/users', (req, res, next) => {
    console.log("Registration One User");
    var user = req.body;
    // user._id = new ObjectID(product._id);
    connection(db => {
        db.collection("user")
            .save(product)
            .then(res.json())
    });
})

// --- Đơn đặt hàng - Order - Order Detail ---
router.post('/order', (req, res, next) => {
    console.log("Order product from client");
    var order = req.body;
    // user._id = new ObjectID(product._id);
    connection(db => {
        db.collection("order")
            .save(order)
            .then(res.json())
    });
})

router.get('/order', (req, res, next) => {
    console.log("get orders from admin");
    connection((db) => {
        db.collection('order')
            .find()
            .toArray()
            .then((orders) => {
                response.data = orders;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.put('/order/:id', (req, res, next) => {
    var order = req.body;
    order._id = new ObjectID(order._id);
    console.log("update order from admin");
    var request = {'_id': new ObjectID(req.params.id)};
    connection((db) => {
        db.collection('order')
            .update(request, order, {save:true}, (err, order) => {
                if (err) {
                    res.send(err);
                }
                res.json(order);
            });
    });
});


// Get one user by username, password
// router.get('/users/:username&:password', (req, res, next) => {
    
// });

module.exports = router;