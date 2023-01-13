import express, { request, response } from "express";

import{
    studentController,
  }from "../Controllers/index.js"


const router = express.Router();

router.get('/',studentController.getAllStudent)

// get id student
router.get('/:id',studentController.getStudentByID);  

//put or patch
//put : nếu tìm thấy đối tượng thí update nếu không tìm thấy thì thôi
//patch : nếu không tìm thấy đối tượng thì tạo mới
router.patch('/insert',studentController.updateStudent);  


router.post('/insert',studentController.insertStudent); 


export default router