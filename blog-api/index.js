import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// import users from './routes/users.js';
import userController from './controller/userController.js';

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

app.get('/users', userController.getAllUsers);
app.get('/users/:nim', userController.getUserByNIM);
app.post('/users', userController.createUser);
app.put('/users/:nim', userController.updateUserByNIM);
app.delete('/users/:nim', userController.deleteUserByNIM);

app.get('/', (req, res) => {
    res.send("Hello from Homepage.!");
});

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
})