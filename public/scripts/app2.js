$(document).ready(function() {
  console.log('app.js loaded!');

  // Get All AJAX call
  $.get('/api/clothes', function (json) {
    json.forEach(function (clothes) {
      renderAllClothes(clothes);
    });
  });
});

function renderAllClothes(clothes) {
  var clothesHtml = $('#clothes-template').html();
  var clothesTemplate = Handlebars.compile(clothesHtml);
  var html = clothesTemplate(clothes);
  $('#clothes').append(html);
}
