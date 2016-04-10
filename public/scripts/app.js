var allClothes = [];

$(document).ready(function() {
  console.log('app.js loaded!');

  // Get All AJAX call
  $.get('/api/clothes').success(function (clothes) {
      renderClothes(clothes);
    });


  $('#createClothes').on('click', function(e) {
    $('#clothesModal').modal();
  });


  $('#saveClothes').on('click', function handleNewClothesSubmit(e) {
    e.preventDefault();
    console.log('Add Button Clicked');
    var $clothesModal = $('#clothesModal'),
        $clothesType = $clothesModal.find('#type'),
        $description = $clothesModal.find('#description'),
        $picture = $clothesModal.find('#picture'),
        $max = $clothesModal.find('#max');
    var clothesData = {
      type: $clothesType.val(),
      description: $description.val(),
      picture: $picture.val(),
      max: $max.val()
    };

    $.post('/api/clothes', clothesData, function (data) {
      console.log("add clothes", data);
      $('.newClothesInput').val(''); //empties modal input fields
      $clothesModal.modal('hide');
    });
  });
});

function renderClothes(clothes) {
  console.log('rendering clothes');
  var hatsHtml = $('#hats-template').html(),
      topsHtml = $('#tops-template').html(),
      bottomsHtml = $('#bottoms-template').html(),
      shoesHtml = $('#shoes-template').html();

  var hatsTemplate = Handlebars.compile(hatsHtml),
      topsTemplate = Handlebars.compile(topsHtml),
      bottomsTemplate = Handlebars.compile(bottomsHtml),
      shoesTemplate = Handlebars.compile(shoesHtml);

  var $hatTarget = $('.hat-item-target'),
      $topTarget = $('.top-item-target'),
      $bottomTarget = $('.bottom-item-target'),
      $shoeTarget = $('.shoe-item-target');

  var html;

  clothes.forEach(function(item) {
		var clothingType = item.type;
		if (clothingType === 'Hat') {
      html = hatsTemplate(item);
      $hatTarget.append(html);
    } else if (clothingType === 'Top') {
      html = topsTemplate(item);
      $topTarget.append(html);
    } else if (clothingType === 'Bottom') {
      html = bottomsTemplate(item);
      $bottomTarget.append(html);
    } else {
      html = shoesTemplate(item);
      $shoeTarget.append(html);
    }
  });
}
