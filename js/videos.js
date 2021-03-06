$(function(){
  // Copy iframe sample and embed each youtube iframe into the skeleton
  // be sure to add /embed/ to the url
  var videos =
  { //this is a hash with the video urls as keys and the search tags as values separated by spaces
    "https://www.youtube.com/embed/xgakdcEzVwg": "All Minecraft",
    "https://www.youtube.com/embed/0eYbNYvZZoc": "All Careers",
    "https://www.youtube.com/embed/N05CMCpXwkQ": "All Careers",
    "https://www.youtube.com/embed/NtdiH24_OTk": "All Universities",
    "https://www.youtube.com/embed/pvAsqPbz9Ro": "All Coding",
    "https://www.youtube.com/embed/55jADN4Y7Pg": "All Minecraft Coding",
    "https://www.youtube.com/embed/AYFlEyKMp-c": "All Universities",
    "https://www.youtube.com/embed/uw28disTaHg": "All Minecraft"
  };
  var iframeSample = $('#sample_iframe iframe');
  var container = $('#video_panel');
  var tags = [];
  Object.keys(videos).forEach(function(ele){
    iframeSample.attr('src', ele);
    iframeSample.attr('data-tags', videos[ele]);
    container.append(iframeSample.clone());
    iframeSample.remove();
    videos[ele].split(" ").map(function(tag){
      tags.push(tag);
    })
    $('#search_bar').select2();
  });

  tags = tags.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
  tags.forEach(function(tag){
    $('#search_bar')
      .append($("<option>")
        .text(tag)
        .val(tag));
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
