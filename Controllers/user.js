import {body, validationResult } from "express-validator";

import {
  studentRepository,
  userRepository,
} from '../repositories/index.js';
const login = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { email, password } = req.body;
  //cal repository
  await userRepository.login({email,password})
  res.status(200).json({
    message:'Login user successfully',
  });
};
const register = async (req, res) => {
  res.status(201).json({
    message:'Post Registration users',
  })
};


const getDetailUser= async (req, res) => {

}


export default {
    login,
    register,
    getDetailUser,
}