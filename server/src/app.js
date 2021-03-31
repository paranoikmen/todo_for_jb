const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
const PORT = 4000;

dotenv.config();

mongoose.connect(`${process.env.START_MONGODB}${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}${process.env.END_MONGODB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connect to mongoose")
})

const TaskSchema = new mongoose.Schema({
    name: String,
    checked: Boolean
});

const Task = mongoose.model('Task', TaskSchema);

//middleware
app.use(express.json());
app.use(cors({origin: "http://localhost:3000", credentials: true}))

app.get('/', (req, res) => {
    res.send('hello server')
})

app.post('/api/task', async (req, res) => {
    const { name, checked } = req.body
    const task = new Task({ name: name, checked: checked})
    console.log(req.body)
    task.save();
    res.send(req.body);
})

app.get('/api/task', async (req, res) => {
   await console.log(Task.find({name: "fghjkldfghj", checked: false}));
})

app.get("/api/users", function(req, res){

    Task.find({}, function(err, tasks){

        if(err) return console.log(err);
        res.send(tasks);
    });
});

app.listen(4000, () => {
    console.log(`Server started on PORT = ${PORT}`)
})