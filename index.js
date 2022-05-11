const express = require('express');
const app = express();
var fileupload = require('express-fileupload')

app.use(fileupload())

app.get("/", (req, res, next)=>{
    res.status(200).send("Hello World")
})

app.post("/upload", (req, res, next)=>{
    const file = req.files.video;
    console.log(file)
    uploadPath = __dirname + "\\" + file.name;
    console.log(uploadPath)
    file.mv(uploadPath, function(err, result){
        console.log(result)
        if(err){
            throw err
        }else{
            res.send({success: true , message: 'File Uploaded'})
        }
    })
})


app.listen(3002, ()=>{
    console.log("Started on port: 3002")
})