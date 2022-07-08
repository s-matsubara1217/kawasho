/*--------------------
  mainVisual
--------------------*/
$(function () {
  $('#movie').mb_YTPlayer({
    onReady: function( player ) {
      $('body').addClass('js-loaded-front');
    }
  });
});

/*--------------------
  facility
--------------------*/
//順序入れ替え
function switchByWidth() {
  if (window.matchMedia('(max-width: 834px)').matches) {
    $('.facility__title').after($('.facility__img'));
  } else if (window.matchMedia('(min-width:835px)').matches) {
    $('.facility__body').after($('.facility__img'));
  }
}
window.onload = switchByWidth;
window.onresize = switchByWidth;
