const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const db = require('../../models');

const option = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_OR_KEY
};

const jwtStrategy = new Strategy(option, async (payload, done) => {
    try {
        const targetUser = await db.User.findOne({ where: { id: payload.id } });

        if (targetUser) {
            done(null, targetUser);
        } else {
            done(null, false);
        }
    } catch (err) {
        console.log(err);
    }
});
passport.use("jwt", jwtStrategy);