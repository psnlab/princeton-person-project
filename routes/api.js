var express = require('express');
var router = express.Router();
var db = require('../lib/users');
var validate = require('../lib/user_validation');
var createUser = require('../lib/create_user');
var createAdmin = require('../lib/create_admin');

router.get('/users', function (req, res, next) {
  db.getUsers().then(function(users) {
    res.json(users);
  })
});

router.post('/signup', function (req, res, next) {
  validate.userExists(req.body.username).then(function (result) {
    if(!result) {
      createUser(req.body.username, req.body.password).then(function (user) {
        res.json(user);
        })
    } else {
      res.json({error: "Invalid username / password"});
    }
  });
})

router.post('/signin', function (req, res, next) {
  validate.userExists(req.body.username).then(function (result) {
    if(result && validate.checkPassword(req.body.password, result.attributes)){
      res.json(result.attributes);
    } else {
      res.json({ error: "Invalid username / passsword"})
    }
  })
});

router.post('/admin/new', function (req, res, next) {
  validate.userExists(req.body.username).then(function (result) {
    if(!result){
      createAdmin(req.body.username, req.body.password).then(function (admin) {
        res.json(admin);
      })
    } else {
      res.json({ error: "Invalid username / password" });
    }
  })
});

router.get('/users/:id', function(req, res, next) {
  db.getUser(req.params.id).then(function (user) {
    res.json(user.attributes);
  })
})

router.delete('/users/:id', function (req, res, next) {
  db.remove(req.params.id).then(function (response) {
    res.json(response)
  })
})

module.exports = router;
