


$(document).ready(function(){

  var panelCollapsed = false;

  //item preview image click
  $('.item-image').click(function(event){
    var liParent = $(this).parent();
    var ulParent = liParent.parent();

    ulParent.children().each(function(){
      $(this).children().each(function(){
        $(this).removeClass('image-selected');
      });
    });

    $(this).toggleClass('image-selected');
    $('#current-item-image').attr('src', $(this).children(':first').attr('src'));
  });


  $('#infoPanel').click(function(){
    var span = $(this).children().first();
    var panel = $('#productInfo');
    if (panel.hasClass("in")){
      span.css("top", "-8px");
      span.text("+");
    }
    else{
      span.css("top", "-11px");
      span.text("-");
    }
  });

});
