import express from "express";  
  
export const router = express.Router();  
export const prefix = '/website';  
  
router.get('/hello', function (req, res) {  
  res.send({message: "Hello from example!"})  
});