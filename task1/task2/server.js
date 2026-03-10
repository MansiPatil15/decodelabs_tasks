const express = require("express");

const app = express();
app.use(express.json());

let students = [];

// GET API
app.get("/students",(req,res)=>{
res.json(students);
});

// POST API
app.post("/students",(req,res)=>{

const {name,email,course}=req.body;

if(!name || !email || !course){
return res.status(400).json({message:"All fields required"});
}

students.push({name,email,course});

res.json({message:"Student added successfully"});
});

app.listen(5000,()=>{
console.log("Server running on port 5000");
});
