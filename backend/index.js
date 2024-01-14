import express from 'express'
import Connection from './db.js';
import router from './routes/route.js';
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express();

//the post req send from the server to database require body parser or else it will be undifined

app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended: true}))

//cors is used to connect one url to another eg: connect localhost 3000 and localhoat 8000
app.use(cors())
// app.use(express.json())
app.use("/",router)

const PORT = 8000;

//call to connection from mongodb database
Connection()
app.listen(PORT, () => console.log(`server is running successfully on port ${PORT}`))
