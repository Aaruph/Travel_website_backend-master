const express = require("express")
const router = express.Router();
const { findAll, save, findById, deleteById, update } = require("../controller/PackageController");
const PackageValidation = require("../validation/PackageValidation");


router.get("/", findAll);
router.post("/", PackageValidation, save);
router.get("/:id", findById);
router.delete("/:id", deleteById);
router.put("/:id", update)



module.exports = router;
