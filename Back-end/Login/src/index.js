const express = require("express");
const app = express();
app.use(express.json());
const { register, login } = require("./controller/auth.controller");
const postsController = require("./controller/post.controller");
const passport = require("./config/passport.config");

app.post("/register", register);
app.post("/login", login);
app.use("/posts", postsController);

app.use(passport.initialize());

passport.serializeUser(function ({ user, token }, done) {
  done(null, { user, token });
});

passport.deserializeUser(function ({ user, token }, done) {
  done(err, { user, token });
});

app.get("/auth/google/failure", function (req, res) {
  return res.send("Something went wrong");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "/auth/google/failure",
  }),
  function (req, res) {
    const { user, token } = req.user;
    return res.status(200).json({ user, token });
  }
);

module.exports = app;