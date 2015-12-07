$(document).ready(function(){

  $('.like').click(function(event){
    event.preventDefault();
    var checked = $(this).hasClass("like-clicked");
    //todo: check if cookies contain this elemenent inside favourites.
    if (!checked){
      $(this).attr("class", "like like-clicked fa fa-heart hvr-push");
    }
    else{
      $(this).attr("class", "like fa fa-heart-o hvr-pop");
    }
  });
});
