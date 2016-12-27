app.factory("AdminSurveysService", [
  "$http",
  function($http) {
    var unwrap = function(res) {
      if (!res.data.valid) {
	throw res.data.error;
      }
      return res.data.model || res.data.collection || null;
    };
    
    return {
      publish: function(id) {
	return $http.post('/api/v1/admin/surveys/' + id + '/publish').then(unwrap);
      },
      getSurveyById: function(id) {
	return $http.get('/api/v1/admin/surveys/' + id).then(unwrap);
      },
      getSurveys: function() {
	return $http.get('/api/v1/admin/surveys').then(unwrap);
      },
      createSurvey: function(survey) {
	survey.version_id = 0;
	return $http.post('/api/v1/admin/surveys', survey).then(unwrap);
      },
      updateSurveySchema: function(survey) {
	return $http.post('/api/v1/admin/surveys/' + survey.id + '/schema', survey).then(unwrap);
      }
    };
  }
]);
