$(function(){
  //Copy iframe sample and embed each youtube iframe into the skeleton
  var video_urls = ["https://www.youtube.com/embed/CLishDbwy9c", "https://www.youtube.com/embed/NUC2EQvdzmY"]
  var iframeSample = $('#sample_iframe iframe');
  var container = $('#video_panel')
  video_urls.forEach(function(ele){
    iframeSample.attr('src', ele);
    console.log(ele);
    container.append(iframeSample.clone());
  });
});
