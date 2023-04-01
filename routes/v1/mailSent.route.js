const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const attachmentController = require("../../controller/v1/attachment.controller");

router
  .route("/cv")
  .post(upload.array("file", 5), attachmentController.uploadAttachment);

// router.route("/query").post(attachmentController.contactQuery);

module.exports = router;
