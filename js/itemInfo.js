
$(document).ready(function(){

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
  })

});
