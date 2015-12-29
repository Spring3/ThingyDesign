var isPushAllowed = false;

$(window).resize(function(){
  if($(window).height()<600){
    $('.pushy').css('display', 'none');
    $('.site-overlay').css('display', 'none');
    isPushAllowed = false;
  }
  else{
    $('.pushy').css('display', 'block');
    $('.site-overlay').css('display', 'block');
    isPushAllowed = true;
  }
});

$(document).ready(function(){

  if($(window).height()<600){
    $('.pushy').css('display', 'none');
    $('.site-overlay').css('display', 'none');
    isPushAllowed = false;
  }
  else{
    $('.pushy').css('display', 'block');
    $('.site-overlay').css('display', 'block');
    isPushAllowed = true;
  }

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

  //modal window quantity selector logic
  $('.btn-number').click(function(e){
    e.preventDefault();

    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {
            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
  });
  $('.input-number').focusin(function(){
    $(this).data('oldValue', $(this).val());
  });
  $('.input-number').change(function() {

    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());

    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }


  });
  $(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    $(pushyManager);

    $('#cartPushBtn').click(function(){
        $('.pushy').removeClass('pushy-open');
        $('.pushy').addClass('pushy-left');
        $('body').removeClass('pushy-active');
    })

    function pushyManager() {
      if (isPushAllowed){
        var html = $("html");
        var pushy = $('.pushy');
        var arrow = $('#cartPushBtn');

        if (pushy.hasClass('pushy-open')){
          html.css("overflow", "hidden").css('margin-right', '17px');
        } else{
          html.css("overflow", "auto").css('margin-right', '0px');
          arrow.removeClass("rotate");
        }
      }else{
        $('.pushy').removeClass('pushy-open');
        $('.pushy').addClass('pushy-left');
        $('body').removeClass('pushy-active');
      }
      setTimeout(pushyManager, 500);
    }
});

$(document).on('click', '.menu-btn', function(event){
  $('.pushy').css('visibility', 'visible');
  var arrow = $('#cartPushBtn');
  arrow.addClass("rotate");
});

$(document).on('click', '.menu-btn-stub', function(event){
  event.preventDefault();
  $('.pushy').css('display', 'none');
  $('.site-overlay').css('display', 'none');
});
