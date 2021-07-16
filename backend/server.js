import express from 'express';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import userRoute from './routes/userRoute';
import blogRoute from "./routes/blogRoute";

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyparser.json());

app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);

app.listen(5001, () => { console.log("Sever started at http://localhost:5001") });