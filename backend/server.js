
require("dotenv").config()

const app = require("./src/app")
const connectToDB = require("./src/config/database")

connectToDB().then(() => {
    app.listen(3000,()=>{
        console.log("server is runnig on port 3000") 
    })
}).catch(err => {
    console.error("DB connection failed:", err)
})
