var clothesList =[
  {
    type: 'Hat',
    description: 'Giants Hat',
    picture: 'http://goo.gl/S78Cdd',
    max: '10'
  },
  {
    type: 'Top',
    description: 'Giants Shirt',
    picture: 'http://goo.gl/TFPN0L',
    max: '2'
  },
  {
    type: 'Bottom',
    description: "Black Basketball Shorts",
    picture: 'http://goo.gl/8SfTrj',
    max: '2'
  },
  {
    type: 'Shoes',
    description: 'Orange Flyknits',
    picture: 'https://goo.gl/KbDSrP'
  },
  {
  type: 'Shoes',
  description: 'kdjh',
  picture: 'https://goo.gl/KbDSrP'
  },
  {
  type: 'Shoes',
  description: '2',
  picture: 'https://goo.gl/KbDSrP'
  },
  {
  type: 'Shoes',
  description: 'O4',
  picture: 'https://goo.gl/KbDSrP'
  },

];


$(document).ready(function() {
  console.log('app.js loaded!');

  $.get('/api/clothes').success(function (clothes) {
      renderClothes(clothes);
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
