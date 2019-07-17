const express = require('express');
const path = require('path');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');






const app = express();
app.use(express.static(path.join(__dirname , 'client/build')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 2000;


var conn = mysql.createConnection({
  host  : 'localhost',
  user : 'root',
  password : '',
  database : 'nodedatabase'
});

conn.connect(function(err) {
  if(err)
  return  console.log(err);

  return console.log("Database Connected Successfully");
});


app.get('/app', (req, res) => {
  let sql = "SELECT * FROM task ORDER BY created_at DESC LIMIT 3";
  conn.query(sql, function(err, result, field){
    res.send(result);
  });

});


app.get('/api/task', (req, res) => {
  let query = req.query.q

  conn.query('SELECT * FROM task WHERE category = ?', [query], function(err, result, field){
    res.send(result);

  });
});


app.post('/api/feedback', (req, res) => {
  conn.query('INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)', [req.body.name, req.body.email, req.body.message], function(err, result, field){

  });
   res.send("Inserted Successfully");
});




app.get('/*', (req, res) => {

    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});






app.listen(port, function () {
  console.log(`Server Starts on ${port}`);
});
