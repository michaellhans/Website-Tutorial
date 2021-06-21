import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import users from './routes/users.js';

dotenv.config();
const app = express();

// Config the MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
    console.log("Successfully connect to database!");
}).catch(err => {
    console.log(process.env.MONGODB_URI);
    console.log("Can't connect to the database");
    console.log(err);
});


app.use(bodyParser.json());
app.use('/', users);

app.get('/', (req, res) => {
    res.send("Hello from Back End Homepage");
});

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
})