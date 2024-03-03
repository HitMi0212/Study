const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const User = require('../models/user');

module.exports = () => {
  passport.serializeUser((user, done) => {  // user === exUser
    done(null, user.id);    // id만 추출하여 저장
  });
  // 세션  {세션쿠키: 유저아이디} -> 메모리 저장

  passport.deserializeUser((id, done) => {
    User.findOne({ where: { id } })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  local();
};