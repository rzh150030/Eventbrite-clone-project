const express = require('express');
const asyncHandler = require('express-async-handler');
const {requireAuth} = require("../../utils/auth");
const {Registration, Career_fair, User} = require("../../db/models");

const router = express.Router();

//Create a new registration
router.post("/register", requireAuth, asyncHandler(async (req, res) => {
    const {career_fair_id, user_id} = req.body;

    const register = await Registration.create({
        career_fair_id,
        user_id
    });

    const registration = await Registration.findByPk(register.id, {include: [Career_fair, User]});

    return res.json(registration);
}));

//Delete an existing registration
router.delete("/:id(\\d+)/unregister", requireAuth, asyncHandler(async (req, res) => {
    const id = req.params.id;

    const registration = await Registration.findByPk(id);
    await registration.destroy();

    return res.json("Unregistered");
}));

//Get all user's registrations
router.get("/:id(\\d+)/registrations", requireAuth, asyncHandler(async (req, res) => {
    const id = req.params.id;

    const user = await User.findByPk(id, {include: Registration});

    return res.json(user);
}));

module.exports = router;
