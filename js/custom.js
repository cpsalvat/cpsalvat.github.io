var AIR_BNB_SEATTLE = 'https://www.airbnb.com/s/Seattle--WA--United-States?checkin=05%2F27%2F2017&checkout=05%2F29%2F2017&guests=&zoom=14&search_by_map=true&sw_lat=47.59496270245671&sw_lng=-122.3589584862101&ne_lat=47.62783832015678&ne_lng=-122.31947636951088&ss_id=5xaeqs18&s_tag=IBtld-7B';

var AIR_BNB_VENUE = 'https://www.airbnb.com/s/Trinity-Tree-Farm--228th-Avenue-Southeast--Issaquah--WA--United-States?checkin=05%2F27%2F2017&checkout=05%2F29%2F2017&guests=&zoom=13&search_by_map=true&sw_lat=47.46371751893914&sw_lng=-122.08526631760822&ne_lat=47.52963854405281&ne_lng=-122.00630208420978&ss_id=n934z1jx&s_tag=AgeZP1vs';

var getCountdownDays = function() {
  var oneDayMs = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  var today = new Date();
  var weddingDate = new Date(2017, 04, 28);
  return Math.round(Math.abs((weddingDate.getTime() - today.getTime()) / oneDayMs));
};


var app = angular.module('myApp', ['ngRoute']);
app.controller('myCtrl', function($scope, $templateCache) {
  $scope.countdownDays = getCountdownDays();

  $scope.airbnbSeattle = AIR_BNB_SEATTLE;
  $scope.airbnbVenue = AIR_BNB_VENUE;

  $scope.pictures = [];
  for (var i=1; i<=18; i+= 3) {
    var fileSet = [];    
    for (var j=0; j<3; j++) {
      var filename = './pictures/' + (i + j) + '.jpg';
      fileSet.push(filename);
    }
    $scope.pictures.push(fileSet);
  }

  $scope.openModal = function(picName) {
    $scope.showImageName = picName;
    $('#myModal').modal('show');
  }
});


app.run(function($templateCache) {
  var htmlHeader = 
    '<nav class="navbar navbar-default navbar-fixed-top">'+
    '  <div class="container-fluid">' +
    '    <!-- Brand and toggle get grouped for better mobile display -->'+
    '    <div class="navbar-header">'+
    '      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" '+
    '              data-target="#bs-example-navbar-collapse-1" aria-expanded="false">'+
    '        <span class="sr-only">Toggle navigation</span>'+
    '        <span class="icon-bar"></span>'+
    '        <span class="icon-bar"></span>'+
    '        <span class="icon-bar"></span>'+
    '      </button>'+
    '      <a class="navbar-brand" href="./main.html">Christina & Ben</a>'+
    '    </div>'+
    '    <!-- Collect the nav links, forms, and other content for toggling -->'+
    '    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'+
    '      <ul class="nav navbar-nav navbar-right">'+
    '        <li><a href="./rsvp.html">RSVP</a></li>'+
    '        <li><a href="./planning.html">Planning</a></li>'+
    '        <li><a href="./events.html">Weekend Events</a></li>'+
    '        <li><a href="./about.html">About Us</a></li>'+
    '      </ul>'+
    '    </div><!-- /.navbar-collapse -->'+
    '  </div><!-- /.container-fluid -->'+
    '</nav>';
  $templateCache.put('header.html', htmlHeader);
});

  


