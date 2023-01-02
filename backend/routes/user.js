const router = require("express").Router();
const User = require("../models/user.model");
// console.log(User.find())

router.route("/").get((req, res) => {
    //console.log("this is user.js");
    User.find()
        .then((user) => {
            //console.log(user)
            res.json(user);

        })
        .catch((err) => {
            res.status(400).json("error" + err);
        });
});

router.route("/add").post((req, res) => {
    console.log(req.body.username)
    const username = req.body.username;

    const newUser = new User({ username });

    newUser
        .save()
        .then(() => {
            return (
                res.json("New user added at database ")

            );
        })
        .catch((err) => {
            return (res.status(400).json(err));
        });
});



router.route('/:id').delete((req, res) => {
    const id = req.params.id
        //console.log(id)
    User.findByIdAndDelete(id).then((result) => {
        res.json(result)
            //console.log(result)
        res.json("Item Deleted from  database")

    }).catch((err) => {
        console.log(err)
    })


})





module.exports = router;



// const router = require('express').Router();
// let User = require('../models/user.model');

// router.route('/').get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//   const username = req.body.username;

//   const newUser = new User({username});

//   newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// module.exports = router;