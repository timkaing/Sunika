const User = require('../models/user');

module.exports = (app) => {
    // sign up form
    app.get('/sign-up', (req,res) => {
        res.render('sign-up', { title: 'Sign Up'});
    });

    // sign up post
    app.post('/sign-up', (req,res) => {
        // create user
        const user = new User(req.body);

        user
            .save()
            .then(user => {
                res.redirect('/');
            })
            .catch(err => {
                console.log(err.message);
            });
    });
};