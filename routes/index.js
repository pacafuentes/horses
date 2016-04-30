var express = require('express');
var router = express.Router();
var message = 'Feliz cumple Kikito!!';

var users  = [
    {
        name: "Kiki",
        horse: "Oro",
        shots: 3
    },
    {
        name: "Emma",
        horse: "Basto",
        shots: 6
    },
    {
        name: "Facu",
        horse: "Copa",
        shots: 10
    }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Horses', message: message});
});

router.get('/admin', function(req, res, next) {
    res.render('admin', { title: 'Horses', message: message });
});

router.get('/users', function(req, res) {
    res.send(users);
});

router.post('/clear', function(req, res) {
    users = [];
    res.status(200);
});

router.post('/user', function (req, res) {
  var user = {
    name: req.body.name,
    horse: req.body.horse,
    shots: Number(req.body.shots)
  };
  users.push(user);
  res.render('admin', { title: 'Horses', message: message });
});

router.use(express.static('public'));
module.exports = router;