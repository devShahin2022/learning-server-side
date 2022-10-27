const express = require('express');
const cors = require('cors');
const fakeData = require('./courseFakeData.json');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());


app.get('/',(req,res) => {
    res.send('Server running');
});
app.get('/all-course',(req,res) => {
    res.send(fakeData);
});

app.listen(port, ()=>{
    console.log(`Server running on port : ${port}`);
})