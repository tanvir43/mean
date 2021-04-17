import mongoose from 'mongoose';

const log = (msg) => console.log(msg);
const uri = 'mongodb://localhost:27017/maslama';
const option  = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
};

const connectWithDb = () => {
    mongoose.connect(uri, option, (err, db) => {
        if (err) {
            console.log(err);
        }
        else log('Database connection established');
    })
}

export default connectWithDb;