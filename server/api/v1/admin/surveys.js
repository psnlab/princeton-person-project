var express = require('express');
var router = express.Router();
var Survey = require('../../../models/survey');
var h = require('../helpers');

router.get('/', function(req, res) {
  Survey.fetchAll().then(h.returnCollection(res)).catch(h.handleError(res));
});

router.get('/:id', function(req, res) {
  h.fetchSurvey(req.params.id).then(h.returnModel(res)).catch(h.handleError(res));
});

router.post('/', function(req, res) {
  new Survey({
    name: req.body.name,
    version: 0,
    status: 'draft',
    est_time: req.body.est_time, // in seconds
    schema: req.body.schema || "{}"
  }).save().then(h.returnModel(res)).catch(h.handleError(res));
});

router.post('/:id', function(req, res) {
  // var id = parseInt(req.params.id);
  // TODO: handle version
  new Survey({
    version: parseInt(req.body.version),
    est_time: req.body.est_time,
    name: req.body.name,
    schema: req.body.schema
  }).save().then(h.returnModel(res)).catch(h.handleError(res));
});

router.post('/:id/publish', function(req, res) {
  h.fetchSurvey(req.params.id).then(function(survey) {
    if (survey.attributes.status != 'draft') {
      throw 'state transition error';
    }
    survey.attributes.status = 'published';
    return survey.save();
  }).then(h.returnModel(res)).catch(h.handleError(res));
});

router.post('/:id/schema', function(req, res) {
  h.fetchSurvey(req.params.id).then(h.optimisticLock(req)).then(function(survey) {
    survey.attributes.schema = JSON.stringify(req.body.schema);
    survey.attributes.version++;
    return survey.save();
  }).then(h.returnModel(res)).catch(h.handleError(res));
});

module.exports = router;
