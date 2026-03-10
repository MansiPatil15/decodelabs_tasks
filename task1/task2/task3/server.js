const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

/* Database Connection */

const db = mysql.createConnection({
host:"localhost",
user:"root",
password:"yourpassword",
database:"studentsdb"
});

db.connect((err)=>{
if(err){
console.log("Database connection failed");
}else{
console.log("Connected to MySQL database");
}
});

/* GET data from database */

app.get("/students",(req,res)=>{

db.query("SELECT * FROM students",(err,result)=>{

if(err){
res.status(500).json(err);
}else{
res.json(result);
}

});

});

/* INSERT data into database */

app.post("/students",(req,res)=>{

const {name,email,course} = req.body;

const sql = "INSERT INTO students (name,email,course) VALUES (?,?,?)";

db.query(sql,[name,email,course],(err,result)=>{

if(err){
res.status(500).json(err);
}else{
res.json({message:"Student added successfully"});
}

});

});

app.listen(5000,()=>{
console.log("Server running on port 5000");
});
