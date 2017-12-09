/**
* Mostrar gif mientras la página carga
*/

$(document).ready(function(){
  $("#loader").fadeOut("slow");
})


$(document).ready(function(){
  $("#tags").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true
  })
});

/**
* Función que abre el modal
*/

$(document).ready(function(){
  $(".item, .modal-background").click(function(){
    var image = $(this).html();
    $(".modal-content").html(image);
    $(".modal").toggleClass("is-active");
  })
});