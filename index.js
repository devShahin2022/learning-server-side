const express = require('express');
const cors = require('cors');
const fakeData = require('./courseFakeData.json');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());


app.get('/',(req,res) => {
    res.send('Server running');
});
// get all course data
app.get('/all-course',(req,res) => {
    res.send(fakeData);
});

// get single data
app.get('/all-course/:id',(req,res) => {
    // console.log(req.params.id);
    const id = parseInt(req.params.id);
    const singleData = fakeData.find(course => course.id === id) || [];
    res.send(singleData);
});

app.listen(port, ()=>{
    console.log(`Server running on port : ${port}`);
})