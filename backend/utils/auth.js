// backend/utils/auth.js
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User } = require('../db/models');

const { secret, expiresIn } = jwtConfig;
// Phase 3, User Auth Middlewares, just created auth file in the utils folder. Will now add const {user} above.
