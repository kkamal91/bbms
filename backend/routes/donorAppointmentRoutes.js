const express = require("express");
const { getAppointmentsByDonor } = require("../controllers/appointmentController"); 

const router = express.Router();

// ✅ Route to Get Appointments by Donor
router.get("/:donorId", getAppointmentsByDonor);

module.exports = router;