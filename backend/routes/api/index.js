// backend/routes/api/index.js
const router = require('express').Router();

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });


// GET /api/set-token-cookie
const { setTokenCookie } = require('../../utils/auth.js');


module.exports = router;
