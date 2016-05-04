var $ = require('jquery');
var moment = require('moment')

$(function() {
  var date = moment().format('dddd, MMMM Do, YYYY');
  $('.today').html('<p style="color: rgba(0, 0, 0, 0.5);">Hello from jQuery land! Today is ' + date + '.</p>');
});
