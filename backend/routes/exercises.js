const router = require("express").Router();
const Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
    Exercise.find()
        .then((exercise) => {
            return res.json(exercise);
        })
        .catch((err) => {
            return res.status(400).res.json(err);
        });
});

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;

    const duration = Number(req.body.duration);

    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise
        .save()
        .then(() => {
            console.log(`Exercise is saved`);
            res.json(`Exercise is saved`);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});


router.route("/:id").get((req, res) => {

    const id = req.params.id;
    Exercise.findById(id).then((exercise) => {

        res.json(exercise);
    }).catch((err) => {
        res.status(400).json(err)
    })




})
router.route("/:id").delete((req, res) => {
    const id = req.params.id
    Exercise.findByIdAndDelete(id).then(() => {
        res.json("Item Delete")
    }).catch((err) => {
        res.status(400).json(err)
    })


})

router.route("/update/:id").post((req, res) => {

    const id = req.params.id


    Exercise.findById(id).then((exercise) => {
        console.log(exercise);


        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.username);

        exercise.save().then(() => {
            res.json("Exercise Updated")
        }).catch((err) => {
            res.status(400).json("err is " + err)
        })



    }).catch((err) => {
        res.status(400).json(err)
    })






})

module.exports = router;