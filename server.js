// File metadata
// Setup
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const app = module.exports = express();
app.use(cors());
app.use(bodyParser.json());
let upload = multer({dest: "uploads/"});

// Show user all items from public folder
app.use(express.static(__dirname + "/public"));

// Get single file
app.post("/upload", upload.single("upfile"), function(req, res, next) {
	// Return file information
	res.json(req.file);
});

// Server listen
const listener = app.listen(process.env.PORT || 3000, function() {
	console.log("Listening port " + listener.address().port);
});
