const express = require('express');
const router = require('./routes/user')
require('./db/mongoose');
const port = process.env.PORT || 3000


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(router)




app.listen(port, () => console.log(`App listening on port ${port}`))