const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../config/index');
const User = require('../DB/models/User');

const register = async ({ firstName, lastName, email, password }) => {
    let salt = await bcrypt.genSalt(SALT_ROUNDS);
    let hash = await bcrypt.hash(password, salt);

    const user = new User({ firstName, lastName, email, password: hash });
    return await user.save();
};

const login = async ( email, password ) => {
    let user = await User.findOne({ email }).populate('bookings').populate('blogPosts');
    if (!user) throw { message: 'Username or password does not match' };

    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw { message: 'Username or password does not match' };
    return user
};

module.exports = {
    register,
    login,
};