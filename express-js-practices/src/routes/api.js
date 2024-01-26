const express = require('express');
const StudentController = require("../controllers/StudentController");
const router = express.Router();

// for read we will use GET method
router.get("/read", StudentController.ReadStudent);


// for create we will use POST method
router.post("/create", StudentController.CreateStudent);


// for put we will use PUT method
router.put("/update", StudentController.UpdateStudent);


// for delete we will use DELETE method
router.delete("/delete", StudentController.DeleteStudent);