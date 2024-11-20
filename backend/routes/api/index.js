// backend/routes/api/index.js
const router = require('express').Router();

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });


// GET /api/set-token-cookie
const { setTokenCookie } = require('../../utils/auth.js');

// Currently on Test User Auth Middlewares, put in the first const. will now put in const {User}...


module.exports = router;
