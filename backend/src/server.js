import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js"
import path from "path"

dotenv.config();

const port = process.env.PORT;

const app = express();
const __dirname = path.resolve();

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

//deployment
if(process.env.NODE_ENV === "production"){    //if in production 

    app.use(express.static(path.join(__dirname, "../frontend/dist"))); /*make dist folder under the frontend as 
                                                                        our static asset if in production*/
    app.get("",(req,res) => {
        app.sendFile(path.join(__dirname, "../frontend/dist/index.html")); //or (__dirname, "../frontend","dist","index.html"))
    });
}

app.listen(port, () => console.log("server is running on port 3000"));



