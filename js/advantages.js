$(document).ready(function(){
  $('.slider_wrapper')._TMS({
    show:0,
    pauseOnHover:false,
    prevBu:'.prev',
    nextBu:'.next',
    playBu:false,
    duration:800,
    preset:'fade',
    pagination:true,//'.pagination',true,'<ul></ul>'
    pagNums:false,
    slideshow:8000,
    numStatus:false,
    banners: 'fade',
    waitBannerAnimation:false,
    progressBar:false
  });
});
$(document).ready(function(){
  !function(){
var map=[]
 ,names=[]
 ,win=$(window)
 ,header=$('header')
 ,currClass
$('.content').each(function(n){
 map[n]=this.offsetTop
 names[n]=$(this).attr('id')
})
win
 .on('scroll',function(){
  var i=0
  while(map[i++]<=win.scrollTop());
  if(currClass!==names[i-2])
  currClass=names[i-2]
  header.removeAttr("class").addClass(names[i-2])
 })
}(); });
    function goToByScroll(id){
  $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
  }
  $(document).ready(function(){
    $().UItoTop({ easingType: 'easeOutQuart' });
  });
