const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routers = require('../Task5.2C/routers/routers');
const { runDB } = require('../Task5.2C/dbconnections');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/card', routers);

app.listen(port, () => {
    console.log(`Express server started on port ${port}`);
    runDB();
});
