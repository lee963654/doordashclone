// backend/routes/index.js
const express = require('express');
const router = express.Router();

const apiRouter = require('./api');

router.use('/api', apiRouter);

// Add a XSRF-TOKEN cookie
router.get("/api/csrf/restore", (req, res) => {
  const csrfToken = req.csrfToken();
  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200).json({
    'XSRF-Token': csrfToken
  });
});

module.exports = router;

// In backend phase 1, just added code in the routes folder index file. will now be at the TEST THE API ROUTER step
