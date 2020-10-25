const express = require("express");
const router = express.Router();
const noticeController = require("../controllers/notice-controller");

router.post("/notice", noticeController.insertNotice);
router.get("/notice", noticeController.fetchNotice);
router.delete("/notice/:id", noticeController.deleteNotice);

module.exports = router;
