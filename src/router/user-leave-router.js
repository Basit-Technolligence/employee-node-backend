const express = require("express");
const router = express.Router();
const leaveController = require("../controllers/user-leave-controller");

router.post("/leave", leaveController.insertLeave);
router.get("/leave", leaveController.fetchLeave);
router.patch("/leave/:id", leaveController.updateLeave);
router.delete("/leave/:id", leaveController.deleteLeave);

module.exports = router;
