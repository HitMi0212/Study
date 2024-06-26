const User = require("../models/user");
const { follow } = require("../services/user");

exports.follow = async (req, res, next) => {
    // req.user.id, req.params.id
    try {
        const result = await follow(req.user.id, req.params.id);
        if(result === 'OK') {
            res.send('success');
        } else if(result === 'NO USER') {
            res.status(404).send('no user');
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
};