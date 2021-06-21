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
    handleValidationErrors,
];

//Create a new event fair
router.post("/createEvent", validateFair, requireAuth, asyncHandler(async (req, res) => {
    const {name, date, capacity} = req.body;
    // const {userId} = req.session.auth;

    const event = await Career_fair.create({
        host_id: 2,
        venue_id: 2,
        name,
        date,
        capacity
    });

    return res.json({event});
}));

//Update an event fair
router.put("/:id(\\d+)/updateEvent", validateFair, requireAuth, asyncHandler(async (req, res) => {
    const {name, date, capacity} = req.body;
    const id = req.params.id;

    const event = await Career_fair.findByPk(id)

    event.name = name;
    event.date = date;
    event.capacity = capacity;
    await event.save();

    return res.json({event});
}));

//Get an event fair to read
router.get("/:id(\\d+)", asyncHandler(async (req, res) => {
    const id = req.params.id;

    const event = await Career_fair.findByPk(id);

    res.json({event});
}));

//Delete an event fair
router.delete("/:id(\\d+)/deleteEvent", requireAuth, asyncHandler(async (req, res) => {
    const id = req.params.id;

    const event = await Career_fair.findByPk(id);
    await event.destroy();
    res.send("Event deleted");
}));

module.exports = router;
