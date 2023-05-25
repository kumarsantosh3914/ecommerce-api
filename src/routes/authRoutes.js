// const express = require('express');
// const passport = require('passport');
// const jwt = require('jsonwebtoken');

// const router = express.Router();

// router.post(
//     '/signup',
//     passport.authenticate('signup', { session: false }),
//     async (req, res) => {
//         res.status(200).json({
//             success: true,
//             message: 'Signup successful',
//             data: {
//                 user: req.user
//             }
//         });
//     }
// )

// router.post(
//     '/login',
//     async (req, res, next) => {
//         console.log("signing in")
//         passport.authenticate(
//             'login',
//             async (err, user, info) => {
//                 console.log(user);
//                 try {
//                     if (err || !user) {
//                         const error = new Error('Something went wrong');
//                         return next(error);
//                     }
//                     req.login(
//                         user,
//                         { session: false },
//                         async (err) => {
//                             if (err) return next(err);
//                             const body = { _id: user._id, email: user.email };
//                             const token = jwt.sign({ user: body }, 'TOP_SECRET');
//                             return res.status(200).json({
//                                 token,
//                                 success: true,
//                                 message: 'Successfully signed in'
//                             });
//                         }
//                     )
//                 } catch (error) {
//                     console.log(error);
//                     return next(error);
//                 }
//             }
//         )(req.res, next);
//     }
// );

// module.exports = router;

const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

// User signup route
router.post('/signup', passport.authenticate('signup', { session: false }), async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: 'Signup successful',
            data: {
                user: req.user
            }
        });
    } catch (error) {
        // Handle any errors that occur during signup
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Error occurred during signup'
        });
    }
});

// User login route
router.post('/login', async (req, res, next) => {
    console.log("Signing in");
    passport.authenticate('login', async (err, user, info) => {
        try {
            if (err || !user) {
                const error = new Error('Something went wrong');
                return next(error);
            }
            req.login(user, { session: false }, async (err) => {
                if (err) return next(err);

                // Create a JWT token
                const body = { _id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, 'TOP_SECRET');

                return res.status(200).json({
                    token,
                    success: true,
                    message: 'Successfully signed in'
                });
            });
        } catch (error) {
            // Handle any errors that occur during login
            console.log(error);
            return next(error);
        }
    })(req, res, next);
});

module.exports = router;