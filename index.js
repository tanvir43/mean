import express from 'express';
import configure from './controllers';
import mongoose from 'mongoose';
import connectWithDb from './mongo';

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
const log = (msg) => console.log(msg);

connectWithDb();
configure(app);

app.listen(port, () => {
    console.log('listening on port....' + port);
})
