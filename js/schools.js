//Skeleton js file


// anything in this block will execute as soon as the page finishes loading
// all button bindings and most jquery should be bound in here
$(function(){
  provinceChanged();
});


function provinceChanged(){
  var province = $("#province_selector").find("option:selected").val();
  $("#school_selector").find('option').each(function(e){
    var elem = $(this);
    if(elem.data('prov') == province){
      elem.show();
      $("#school_selector").val(elem);
    }
    else elem.hide();
  });
}

function schoolSelected(){
  var school = $("#school_selector").find("option:selected").val();
  $(".university_panel").each(function(e){
    var elem = $(this);
    if(elem.data('school') == school){
      elem.show();
    }
    else elem.hide();
  });
}
