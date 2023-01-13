import { body, validationResult } from "express-validator";

import { studentRepository, userRepository } from "../repositories/index.js";

// Thêm sự kiện events có sẵn trong node Notify
import { EventEmitter } from "node:events";

//Event emitted
const myEvent = new EventEmitter();
//lắng nghe (listen)
myEvent.on("event.register.user", (params) => {
  console.log(`They talked about ${JSON.stringify(params)}`);
});

const login = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { email, password } = req.body;
  //cal repository
  await userRepository.login({ email, password });
  res.status(200).json({
    message: "Login user successfully",
  });
};
const register = async (req, res) => {
  //destructuring
  const { name, email, password, phoneNumber, address } = req.body;
  await userRepository.register({
    name,
    email,
    password,
    phoneNumber,
    address,
  });

  //Event emitted
  myEvent.emit("event.register.user", { name,email});

  //Trả thông báo 202 về cho người dùng dạng json
  res.status(201).json({
    message: "Post Registration successfully",
  });
};

const getDetailUser = async (req, res) => {};

export default {
  login,
  register,
  getDetailUser,
};
