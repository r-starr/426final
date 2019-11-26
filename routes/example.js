import express from "express";  
  
export const router = express.Router();  
export const prefix = '/example';  
  
router.get('/hello', function (req, res) {  
  res.send({message: "Hello from example!"})  
});