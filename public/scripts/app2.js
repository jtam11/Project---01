$(document).ready(function() {
  console.log('app.js loaded!');

  // Get All AJAX call
  $.get('/api/clothes', function (json) {
    json.forEach(function (clothes) {
      renderAllClothes(clothes);
    });
  });

  $('#clothes').on('click', '.delete-clothing', function () {
    var clothingId = $(this).parents('.clothing').data('clothing-id');
    console.log('deleting clothing id=' + clothingId );
    $.ajax({
      url: '/api/clothes/' + clothingId,
      method: 'DELETE',
      success: deleteClothingSuccess
    });
  });

  $('#clothes').on('submit', '.update-clothing', function (e) {
    e.preventDefault();
    var clothingId = $(this).parents('.clothing').data('clothing-id');
    console.log('updating clothing id=' + clothingId );
    $.ajax({
      method: 'PUT',
      url: '/api/clothes/' + clothingId,
      data: $(this).serialize(),
      success: updateClothingSuccess
    });
  });
});

function renderAllClothes(clothes) {
  var clothesHtml = $('#clothes-template').html();
  var clothesTemplate = Handlebars.compile(clothesHtml);
  var html = clothesTemplate(clothes);
  $('#clothes').append(html);
}

function deleteClothingSuccess(data) {
  var deletedClothingId = data._id;
  console.log('removing', deletedClothingId);
  $('div[data-clothing-id=' + deletedClothingId + ']').remove();
}

function updateClothingSuccess(data) {
  var updatedClothingId = data._id;
  $('[data-clothing-id=' + updatedClothingId + ']').remove();
  renderAllClothes(data);
}
