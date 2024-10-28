const express = require("express");
const router = express.Router();
const con = require("../controllers/controller.js");
const regCon = require("../controllers/register.js");
const loginCon = require("../controllers/login.js");
const multer = require('../middleware/multer.js')
const passport = require("../middleware/passport_config.js");
//dashbord default path
router.get("/", con.userDefaultCon);
router.get("/userProfile",  con.userProfileCon)

//register path
router.get("/registerForm", regCon.registerForm);
router.post("/register", multer.single("userPath"), regCon.registerCon);

//login path
router.get("/logInForm", loginCon.loginFormCon);
router.post("/login", passport.authenticate('local', { failureRedirect: '/loginForm' }), loginCon.loginCon);

//logout path
router.get("/logOut", loginCon.logOutCon);


module.exports = router;
