const express = require("express")
const router = express.Router();
const { findAll, save, findById, deleteById, update } = require("../controller/BookingController");
const BookingValidation = require("../validation/BookingValidation");


router.get("/", findAll);
router.post("/", BookingValidation, save);
router.get("/:id", findById);
router.delete("/:id", deleteById);
router.put("/:id", update)



module.exports = router;
