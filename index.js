const express = require('express');
const cors = require('cors');
const UserRoute = require('./routes/UserRoute');
const SubmissionRoute = require('./routes/SubmissionRoute');

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(SubmissionRoute);

app.listen(3001, ()=> console.log('Server up and running...'));