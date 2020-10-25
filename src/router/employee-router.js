const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee-controller");
const multer = require("multer");
const authMiddleware = require("../middleware/authMiddleware");

const upload = multer();
router.post(
  "/employee",
  upload.single("photo"),
  employeeController.insertEmployee
);
router.get("/employee", employeeController.fetchEmployee);
router.get("/employee/:id", employeeController.fetchEmployeeById);
router.patch("/employee/:id", employeeController.updateEmployee);
router.delete("/employee/:id", employeeController.deleteEmployee);

router.post("/login", employeeController.findLoginUser);

router.get("/xyz", authMiddleware, employeeController.getLogUser);

router.post("/abc", employeeController.abc);


module.exports = router;
