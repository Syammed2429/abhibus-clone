const port = 2924;
const express = require('express');
const cors = require('cors');
const app = express();

const busController = require('./controller/busController')
const hotelController = require("./controller/hotels.controllers");
const traincontroller = require('./controller/trainsdata')

// const postsController = require("./controller/");
// const { register, login } = require("./controller/auth.controller");
// const passport = require("./config/passport.config");


app.use(cors());
app.use(express.json());







// app.post("/register", register);
// app.post("/login", login);
// app.use("/posts", postsController);

// app.use(passport.initialize());

// passport.serializeUser(function ({ user, token }, done) {
//     done(null, { user, token });
// });

// passport.deserializeUser(function ({ user, token }, done) {
//     done(err, { user, token });
// });

// app.get("/auth/google/failure", function (req, res) {
//     return res.send("Something went wrong");
// });

// app.get(
//     "/auth/google",
//     passport.authenticate("google", { scope: ["email", "profile"] })
// );

// app.get(
//     "/auth/google/callback",
//     passport.authenticate("google", {
//         successRedirect: "http://localhost:3000/",
//         failureRedirect: "/auth/google/failure",
//     }),
//     function (req, res) {
//         const { user, token } = req.user;
//         return res.status(200).json({ user, token });
//     }
// );







app.use("/trains", traincontroller);
app.use("/hotels", hotelController);
app.use('/bus', busController)


module.exports = {
    port,
    app
}