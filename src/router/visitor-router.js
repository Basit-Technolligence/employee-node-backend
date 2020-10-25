const visitorController = require("../controllers/visitor-controller");
const express = require("express");
const router = express.Router();

router.post("/visitor", visitorController.insertVisitor);
router.get("/visitor", visitorController.fetchVisitor);

module.exports = router;
