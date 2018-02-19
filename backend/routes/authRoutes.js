const passport = require('passport');

module.exports = (router) => {
    router.use('/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    router.use('/auth/google/callback',
        passport.authenticate('google')
    );

    router.use('/current_user', (req, res) => {
        res.send(req.user);
    });

    router.use('/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });
};
