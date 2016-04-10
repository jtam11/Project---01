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
