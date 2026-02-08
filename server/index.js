// import express from 'express';
// import Connection from './database/db.js';
// import DefaultData from './default.js';
// import Route from './routes/route.js';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import path from 'path';


// const  app = express();
// const __dirname = path.resolve();
// dotenv.config();

// app.use(express.json());  
// app.use(cors());
// app.use('/', Route);

// const PORT = process.env.PORT || 8000;


// const username=process.env.DB_USERNAME;
// const password=process.env.DB_PASSWORD;

// Connection(username,password);

// // app.use(express.static(path.join(__dirname, '/client/build')));

// // app.use((req, res) => {
// //     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// // });
// app.get('/', (req, res) => {
//     res.send('Server is running');
// });

// app.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`);
// });

// DefaultData();

import express from 'express';
import Connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/route.js';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/', Route);

const PORT = process.env.PORT || 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

DefaultData();
