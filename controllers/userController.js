import express from 'express';
import models from '../models';

const router = express.Router();

const getHandler = (req, res) => {
    res.send('We get the users')
};

const postHandler = (req, res) => {
    const body = req.body;
    console.log(body);
    const user = new models.User({
        username: body.username,
        createAt: new Date(),
    });
    user.save().then((result) => {
        res.status(201).send('User saved ID' + result._id);
    }).catch((error) => {
        res.status(500).send(error);
    });
};

router.get('/', getHandler);
router.post('/', postHandler);

const configure = (app) => {
    app.use('/users', router);
}

export default configure;

