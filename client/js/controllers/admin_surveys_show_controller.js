app.controller('AdminSurveysShowController', [
  "$scope",
  "survey",
  function($scope, survey) {
    $scope.survey = survey;
  }
]);
