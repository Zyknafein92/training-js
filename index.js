const express = require('express');
const app = express();
const userRoute = require('controller/userController');

/* Config */
app.use(express.json());
app.use("/", userRoute);
app.use("/login", userRoute);

app.listen(3000,() => { console.log('server is listening port 3000')});
