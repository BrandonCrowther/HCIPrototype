$(function(){
  // Copy iframe sample and embed each youtube iframe into the skeleton
  // be sure to add /embed/ to the url
  var videos =
  { //this is a hash with the video urls as keys and the search tags as values separated by spaces
    "https://www.youtube.com/embed/CLishDbwy9c": "Rap TestTag",
    "https://www.youtube.com/embed/NUC2EQvdzmY": "StillRap StillRap",
    "https://www.youtube.com/embed/d0e8Q4JOVeM": "Coding",
    "https://www.youtube.com/embed/wUtG93BebJ4": "Whitewashing"
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

  $('#search_bar').on('change', function(){
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
