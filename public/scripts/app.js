$(document).ready(function() {
  console.log('app.js loaded!');

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
      $('.newClothesInput').val('');
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

  var allClothes = clothes.forEach(function(items) {
		var clotheTypes = items.type;
		if (clotheTypes === 'Hat') {
      html = hatsTemplate(items);
      $hatTarget.append(html);
    } else if (clotheTypes === 'Top') {
      html = topsTemplate(items);
      $topTarget.append(html);
    } else if (clotheTypes === 'Bottom') {
      html = bottomsTemplate(items);
      $bottomTarget.append(html);
    } else {
      html = shoesTemplate(items);
      $shoeTarget.append(html);
    }
  });
}


// function renderClothes(clothes) {
//   console.log('rendering clothes');
//   var hatsHtml = $('#hats-template').html();
//   var hatsTemplate = Handlebars.compile(hatsHtml);
//   var html = hatsTemplate(clothes[0]);
//   $('.hat-item-target').append(html);
// }
