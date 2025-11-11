PORT =5000
const express = require('express');

const app= express();

const apiRoutes =require('./routes');


app.use('/api',apiRoutes);

app.listen(PORT, () =>{
console.log(`Successfully started the server on PORT: ${PORT}`);
});