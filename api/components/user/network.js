const express = require('express');

const controller = require('./controller');
const response = require('../../../network/response');

const router = express.Router();

router.get('/', (req, res) => {
  const list = controller.list();
  response.success(req, res, list, 200);
});

module.exports = router;