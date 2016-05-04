angular.module('eliteApp')
 
.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated'
})
 
.constant('API_ENDPOINT', {
  url: 'http://localhost:5082/'
  //  For a simulator use: url: 'http://127.0.0.1:8080/api'
});