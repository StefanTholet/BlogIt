const router = require('express').Router();
const authService = require('../services/authService');

const dbServices = require('../services/db');

const User = require('../DB/models/User');

router.get('/user/:userID', (req, res) => {
    dbServices.getUpdatedUser(req.params.userID)
    .then(user => res.json(user))
    .catch(err => console.log(err))
})

router.post('/register', async (req, res) => {
    let { firstName, lastName, password, email } = req.body;
    if (firstName && lastName && password && email) {
    try {
        let user = await authService.register({ firstName, lastName, email, password });
        res.json(user);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
    } else {
        res.json({msg: 'Please fill all of the registration fields'})
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        let verifiedUser = await authService.login( email, password );
        res.json(verifiedUser);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

module.exports = router;