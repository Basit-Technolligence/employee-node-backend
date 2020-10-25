const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/department-controller");


router.post("/addDepartment", departmentController.addDepartment);
router.get("/getDepartment", departmentController.getDepartment);
router.delete("/deleteDepartment/:id", departmentController.deleteDepartment);


module.exports = router;