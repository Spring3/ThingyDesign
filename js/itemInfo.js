


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
    panelCollapsed = !panelCollapsed;
    if (panelCollapsed){
      $(this).children().children().first().attr("class", "fa fa-plus");
    }
    else{
      $(this).children().children().first().attr("class", "fa fa-minus");
    }
  });

});
