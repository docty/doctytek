const express = require('express'); // It is used to make route to database
const app = express();
const port = process.env.PORT || 8000;
app.listen(port, () => {});
    console.log('App running');