
$(document).ready(function(){

  var panelCollapsed = false;


  $('#Panel').click(function(){
    var span = $(this).children().first();
    var panel = $('#Info');
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
