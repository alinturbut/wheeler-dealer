'use strict';

var express = require('express');
var controller = require('./car.controller');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var router = express.Router();

router.post("/upload", multipartMiddleware, controller.uploadCarFunction);

module.exports = router;
