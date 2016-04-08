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
  }
];




$(document).ready(function() {
  console.log('app.js loaded!');


  $('#wear').on('click', function handleClick() {
    $.ajax({
      method: "GET",
      url: "api/sanity",
      success: sanitySuccess,
      error: sanityError
    });
    console.log("you clicked!");

  });


  renderClothes(clothesList);
});

function sanitySuccess (success) {
  console.log("It Works! Good job!");
  console.log(success);
}

function sanityError (err) {
  console.log("It's broke!");
}

// function renderClothes(clothes) {
//   console.log('rendering clothes');
//   var hatsHtml = $('#hats-template').html(),
//       topsHtml = $('#tops-template').html(),
//       bottomsHtml = $('#bottoms-template').html(),
//       shoesHtml = $('#shoes-template').html();
//
//   var hatsTemplate = Handlebars.compile(hatsHtml),
//       topsTemplate = Handlebars.compile(topsHtml),
//       bottomsTemplate = Handlebars.compile(bottomsHtml),
//       shoesTemplate = Handlebars.compile(shoesHtml);
//
//   var html;
//
//   if (clothes.type === 'Hat') {
//     html = hatsTemplate(clothes);
//     $('.hat-item-target').append(html);
//   } else if (clothes.type === 'Top') {
//     html = topsTemplate(clothes);
//     $('.top-item-target').append(html);
//   } else if (clothes.type === 'Bottom') {
//     html = bottomsTemplate(clothes);
//     $('.bottom-item-target').append(html);
//   } else {
//     html = shoesTemplate(clothes);
//     $('.shoe-item-target').append(html);
//   }
// }

function renderClothes(clothes) {
  console.log('rendering clothes');
  var hatsHtml = $('#hats-template').html();
  var hatsTemplate = Handlebars.compile(hatsHtml);
  var html = hatsTemplate(clothes[0]);
  $('.hat-item-target').append(html);
}
