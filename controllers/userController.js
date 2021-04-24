import express from 'express';
import { saveUser } from '../services/userServices';

const router = express.Router();

const getHandler = (req, res) => {
    res.send('We get the users')
};

const postHandler = async (req, res) => {
    const body = req.body;
    const user = await saveUser(body);
    res.send("The id is " + user._id);
    // console.log(body);
    // const user = new models.User({
    //     username: body.username,
    //     createdAt: new Date(),
    // });
    // user.save().then((result) => {
    //     res.status(201).send('User saved ID' + result._id);
    // }).catch((error) => {
    //     res.status(500).send(error);
    // });
};

router.get('/', getHandler);
router.post('/', postHandler);

const configure = (app) => {
    app.use('/users', router);
}

export default configure;

