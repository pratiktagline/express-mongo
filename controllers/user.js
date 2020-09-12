const router = require('express').Router();
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')
const User = require('./../models/user')

// middleware setup
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// router goes here
router.all(
    '/',
    (req, res) => {
        return res.json({
            status: true,
            message: "User controller working"
        })
    }
)

router.post('/createNew', (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            status: false,
            message: "form validation error",
            errors: errors.array()
        })
    }

    User.create(req.body,
        (error, result) => {
            if (error) {
                return res.json({
                    status: false,
                    message: "DB insert fail",
                    error
                })
            }
            return res.json({
                status: true,
                message: "DB insert successful",
                result
            })
        })
})
// var insertUser = new User({
//     username : req.body.username,
//     email : req.body.email
// });

// insertUser.save((error, result) => {
//     if(error){
//         return res.json({
//             status : false,
//             message : "Database insert fail..",
//             error : error
//         })
//     }
//     return res.json({
//         status : true,
//         message : "Database insert seccessful..",
//         result : result
//     })
// })

router.get(
    '/find',
    (req, res) => {
        User.find((error, result) => {
            if (error) {
                return res.json({
                    status: false,
                    message: "database find fail..",
                    error
                })
            }
            return res.json({
                status: true,
                message: "database find successfully..",
                result
            })

        })
    }
)

router.put('/update/:email', (req, res) => {
    if (req.params.email) {
        User.updateOne({ email: req.params.email },
            { username: "Abhi" },
            (error, result) => {
                if (error) {
                    return res.json({
                        status: false,
                        message: "database update fail..",
                        error
                    })
                }
                return res.json({
                    status: true,
                    message: "database update successful..",
                    result
                })
            }
        )
    }
    else {
        return res.json({
            status: false,
            message: "email is empty..",
        })
    }
})

router.delete('/delete/:email', (req, res) => {
    User.deleteOne((error, result) => {
        if (error) {
            return res.json({
                status: false,
                message: "database remove fail..",
                error
            })
        }
        return res.json({
            status: true,
            message: "database removed succesfully..",
            result
        })
    })
})
module.exports = router;