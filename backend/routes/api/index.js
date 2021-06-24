const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const careerFairRouter = require("./careerFair.js");

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use("/careerFair", careerFairRouter);

module.exports = router;
