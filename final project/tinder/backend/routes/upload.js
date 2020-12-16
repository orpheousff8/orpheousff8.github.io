const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const uploadControllers = require("../controllers/upload");

//upload.single(x); x must be the same as name=x in the frontend form.
router.post("/img", upload.single("avatar"), uploadControllers.uploadFiles);

module.exports = router;