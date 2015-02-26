
/**
 * Expose
 */

module.exports = {
  db: 'mongodb://127.0.0.1:27017/child',
  vkontakte: {
    clientID: '4519557',
    clientSecret: '0iSESz4HFMW64eYnns0k',
    callbackURL: 'http://localhost:3000/auth/vkontakte/callback',
    scope: [
      'email',
      'user_about_me',
      'user_friends'
    ]
  },
  google: {
    clientID: 'APP_ID',
    clientSecret: 'SECRET',
    callbackURL: 'http://localhost:3000/auth/google/callback',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.google.com/m8/feeds',
    ]
  }
};
