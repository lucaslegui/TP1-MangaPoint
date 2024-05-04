import express from 'express';
const app = express()

import mangasRoute from './routes/mangas.route.js';

app.use(express.static('views'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/mangas", mangasRoute);



app.listen(3000, () => {
    console.log("server is corriendo at 3000 puerto 🤠...")
})