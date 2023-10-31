import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import SubmissionRoute from "./routes/SubmissionRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(SubmissionRoute);

app.listen(3001, ()=> console.log('Server up and running...'));