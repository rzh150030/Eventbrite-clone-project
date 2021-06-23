const express = require('express');
const asyncHandler = require('express-async-handler');
const {requireAuth} = require("../../utils/auth");
const {Career_fair, Venue, User} = require("../../db/models");
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
    const {host_id, venue_id, name, date, capacity} = req.body;

    const event = await Career_fair.create({
        host_id,
        venue_id,
        name,
        date,
        capacity
    });

    return res.json(event);
}));

//Update an event fair
router.put("/:id(\\d+)/updateEvent", validateFair, requireAuth, asyncHandler(async (req, res) => {
    const {venue_id, name, date, capacity} = req.body;
    const id = req.params.id;

    const event = await Career_fair.findByPk(id);

    event.venue_id = venue_id;
    event.name = name;
    event.date = date;
    event.capacity = capacity;
    await event.save();

    const updatedEvent = await Career_fair.findByPk(id, {include: [User, Venue]});
    return res.json(updatedEvent);
}));

//Get an event fair to read
router.get("/:id(\\d+)", asyncHandler(async (req, res) => {
    const id = req.params.id;

    const event = await Career_fair.findByPk(id, {include: [User, Venue]});

    return res.json(event);
}));

//Get all event fair to read
router.get("/allEvent", asyncHandler(async (req, res) => {
    const event = await Career_fair.findAll();

    return res.json(event);
}));

//Delete an event fair
router.delete("/:id(\\d+)/deleteEvent", requireAuth, asyncHandler(async (req, res) => {
    const id = req.params.id;

    const event = await Career_fair.findByPk(id);
    await event.destroy();
    res.send("Event deleted");
}));

//Grab venues to select what venues to use
router.get("/venues", requireAuth, asyncHandler(async (req, res) => {
    const venues = await Venue.findAll();
    const data = res.json(venues);
    return data;
}));

module.exports = router;
