const express=require("express")
const app = express()
const { v4: uuidv4 } = require("uuid")
const multer = require("multer")
require("dotenv").config()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
     let suffix = uuidv4();
     let name=suffix+"-"+file.originalname;
     console.log(name)
     cb(null,name )
    }
  })
  
const upload = multer({ storage: storage })
app.post("/upload",upload.single("file"),(req,res,)=>{
    res.json({msg:"UPLOADED SUCCESFULY"})
})



console.log(process.env.PORT)
let port=process.env.PORT || 5000
console.log(port)
app.listen(port,()=>{
    console.log(`SERver is Running on PORT ${port}`)
})




