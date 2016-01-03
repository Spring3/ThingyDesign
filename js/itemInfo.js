


$(document).ready(function(){

  var imageList = $('.image-list');
  if (imageList.children().length == 1){
    imageList.css("display", "none");
  }

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


  $('#productInfoPanel').click(function(){
    var span = $(this).children().first();
    var panel = $('#productInfo');
    processCollapse(span, panel);
  });

  $('#refundInfoPanel').click(function(){
    var span = $(this).children().first();
    var panel = $('#refundInfo');
    processCollapse(span, panel);
  });

  function processCollapse(span, panel){
    if (panel.hasClass("in")){
      span.css("top", "-8px");
      span.text("+");
    }
    else{
      span.css("top", "-11px");
      span.text("-");
    }
  };

});
