// =======================================================================================
// Developed By           : Jhon Alexander López Bohórquez
// Email                  : jalb.23@hotmail.com
// Creation Date          : 2021-02-15 22:32:57
// =======================================================================================
// Version    Description
// [1.0.0]    This class configures the different routes of the API
// =======================================================================================

const express = require('express');
const { getRulings, postRuling, getRuling, updateRuling } = require('../controllers/ruling.controller');

const router = express.Router();

router.route('/').get(getRulings).post(postRuling);

router.route('/:id').get(getRuling).put(updateRuling);

module.exports = router;