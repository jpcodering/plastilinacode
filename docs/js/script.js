$(document).ready(function() {

  // script para el menu oculto
  var header = document.getElementById('header');
  var headroom = new Headroom(header);
  headroom.init();
  // fin script para el menu oculto

  // menu responsive
  // calculamos el ancho de la pagina
  var ancho = $(window).width(),
    enlaces = $('#enlaces'),
    btnMenu = $('#btn-menu'),
    icono = $('#btn-menu .icon');

  if (ancho < 700) {
    enlaces.hide();
    icono.addClass('bars');
  }

  btnMenu.on('click', function(e) {
    enlaces.slideToggle();
    icono.toggleClass('bars');
    icono.toggleClass('imes');
  });

  $(window).on('resize', function() {
    if ($(this).width() > 700) {
      enlaces.show();
      icono.addClass('imes');
      icono.removeClass('bars');
    } else {
      enlaces.hide();
      icono.addClass('bars');
      icono.removeClass('imes');
    }
  });
  // fine menu responsive

});
