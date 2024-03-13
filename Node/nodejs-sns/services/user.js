const User = require("../models/user");

exports.follow = async (userId, followingId) => {
    const user = await User.findOne({ where: {id: userId} });
    if(user) {
        await user.addFollowing(parseInt(followingId, 10));
        return 'OK';
    } else {
        return 'NO USER';
    }
};