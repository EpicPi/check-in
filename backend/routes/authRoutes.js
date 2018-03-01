const passport = require('passport');

module.exports = (router) => {
    router.get('/auth/google/get',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    router.get('/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/');
        }
    );

    router.get('/auth/current_user', (req, res) => {
        res.send(req.user);
    });

    router.get('/auth/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

};
