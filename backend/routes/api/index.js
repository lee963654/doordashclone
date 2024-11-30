// backend/routes/api/index.js
const router = require('express').Router();

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });


// GET /api/set-token-cookie
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');


router.get('/set-token-cookie', async (_req, res) => {
  const user = await User.findOne({
    where: {
      username: 'Demo-lition'
    }
  });
  setTokenCookie(res, user);
  return res.json({ user: user });

});

// Just finished setting set token router. Under Test User Auth Middlewares, now in testing the route in localhost
module.exports = router;
