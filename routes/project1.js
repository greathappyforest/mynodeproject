var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.sendFile(path.resolve(__dirname, '../views/Whack-A-Mole.html'));
});

module.exports = router;
