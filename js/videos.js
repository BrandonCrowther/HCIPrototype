$(function(){
  //Copy iframe sample and embed each youtube iframe into the skeleton
  var videos =
  {
    "https://www.youtube.com/embed/CLishDbwy9c": "Rap TestTag", //these are tags to use for filtering. Add your own easily
    "https://www.youtube.com/embed/NUC2EQvdzmY": "StillRap"
  };
  var iframeSample = $('#sample_iframe iframe');
  var container = $('#video_panel')
  Object.keys(videos).forEach(function(ele){
    iframeSample.attr('src', ele);
    iframeSample.attr('data-tags', videos[ele]);
    container.append(iframeSample.clone());
  });
});
