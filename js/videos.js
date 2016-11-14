$(function(){
  // Copy iframe sample and embed each youtube iframe into the skeleton
  // be sure to add /embed/ to the url
  var videos =
  {
    "https://www.youtube.com/embed/CLishDbwy9c": "Rap TestTag", //these are tags to use for filtering. Add your own easily
    "https://www.youtube.com/embed/NUC2EQvdzmY": "StillRap StillRap"
  };
  var iframeSample = $('#sample_iframe iframe');
  var container = $('#video_panel')
  Object.keys(videos).forEach(function(ele){
    iframeSample.attr('src', ele);
    iframeSample.attr('data-tags', videos[ele]);
    container.append(iframeSample.clone());
    videos[ele].split(" ").filter(onlyUnique).forEach(function(tag){
      $('#search_bar')
        .append($("<option>")
          .text(tag)
          .val(tag));
    });
    iframeSample.remove();
    $('#search_bar').select2();
  });

  $('#search_button').on('click', function(){
    $('.video').each(function(){
      var video = $(this);
      if (video.data('tags').search($("#search_bar").val()) >= 0){
        video.show();
      }
      else video.hide();
    })
  });

});

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
