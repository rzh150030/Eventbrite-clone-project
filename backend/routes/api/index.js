const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const careerFairRouter = require("./careerFair.js");
const registrationRouter = require("./registration.js")

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use("/careerFair", careerFairRouter);
router.use("/registration", registrationRouter);

module.exports = router;
