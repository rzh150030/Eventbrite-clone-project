const express = require('express');
const asyncHandler = require('express-async-handler');
const {requireAuth} = require("../../utils/auth");
const {Career_fair} = require("../../db/models");
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateFair = [
    check("name")
        .exists({Checkfalsy: true})
        .notEmpty()
        .withMessage("Please provide a name for the event"),
    check("date")
        .exists({Checkfalsy: true})
        .notEmpty()
        .withMessage("Please select a date for the event"),
    check("capacity")
        .exists({Checkfalsy: true})
        .notEmpty()
        .withMessage("Please enter a capacity limit for the event"),
]

//Create new event fair
router.post("/", )

module.exports = router;
