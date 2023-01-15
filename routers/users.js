import express from "express";
import { body, validationResult } from "express-validator";

// import controllers index.js
import{
  userController,
  studentController,
}from "../controllers/index.js"

//Khởi tạo đối tượng router
const routes = express.Router();

//Gửi dữ liệu

// routes.get("/", (req, res) => {
//   res.send("Get User");
// });


routes.get("/:id",userController.getDetailUser)

//Thông tin gửi đi (nhạy cảm của người dùng thì dùng post)

routes.post("/register",userController.register )

routes.post(
  "/login",
  // username must be an email
  body("email").isEmail(),
  // password must be at least 5 chars long
  body("password").isLength({ min: 5 }),
  userController.login
);

//export cho nhiều file js sử dụng
export default routes;
