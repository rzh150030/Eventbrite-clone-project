const express = require('express');
const asyncHandler = require('express-async-handler');
const {requireAuth} = require("../../utils/auth");
const {Registration} = require("../../db/models");

const router = express.Router();

//Create a new registration
router.post("/register", requireAuth, asyncHandler(async (req, res) => {
    
}));

//Delete an existing registration

//Get all registrations

module.exports = router;
