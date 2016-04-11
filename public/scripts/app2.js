$(document).ready(function() {
  console.log('app.js loaded!');

  var clothesHtml = $('#clothes-template').html();
  var clothesTemplate = Handlebars.compile(clothesHtml);
  
  function renderAllClothes(clothes) {
    var html = clothesTemplate(clothes);
    $('#clothes').append(html);
  }


  // Get All AJAX call
  $.get('/api/clothes', function (json) {
    json.forEach(function (clothes) {
      renderAllClothes(clothes);
    });
  });

  $('.btn-group').on('click', '#all', function (e) {
    e.preventDefault();
    $('#clothes').empty();
    $.get('/api/clothes', function (json) {
      json.forEach(function (clothes) {
        renderAllClothes(clothes);
      });
    });
  });

  $('.btn-group').on('click', '#allHats', function (e) {
    e.preventDefault();
    $('#clothes').empty();
    $.get('/api/clothes/type/Hat', function (json) {
      json.forEach(function (clothes) {
        renderAllClothes(clothes);
      });
    });
  });

  $('.btn-group').on('click', '#allTops', function (e) {
    e.preventDefault();
    $('#clothes').empty();
    $.get('/api/clothes/type/Top', function (json) {
      json.forEach(function (clothes) {
        renderAllClothes(clothes);
      });
    });
  });

  $('.btn-group').on('click', '#allBottoms', function (e) {
    e.preventDefault();
    $('#clothes').empty();
    $.get('/api/clothes/type/Bottom', function (json) {
      json.forEach(function (clothes) {
        renderAllClothes(clothes);
      });
    });
  });

  $('.btn-group').on('click', '#allShoes', function (e) {
    e.preventDefault();
    $('#clothes').empty();
    $.get('/api/clothes/type/Shoes', function (json) {
      json.forEach(function (clothes) {
        renderAllClothes(clothes);
      });
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

function deleteClothingSuccess(data) {
  var deletedClothingId = data._id;
  console.log('removed', deletedClothingId);
  $('div[data-clothing-id=' + deletedClothingId + ']').remove();
}

function updateClothingSuccess(data) {
  var updatedClothingId = data._id;
  console.log('updated', updatedClothingId);
  $('[data-clothing-id=' + updatedClothingId + ']').remove();
  renderAllClothes(data);
}
