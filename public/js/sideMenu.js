$(document).ready(function(){
    $('.carousel').carousel({fullWidth: true});
  });


 function autoplay() {
     $('.carousel').carousel('next');
     setTimeout(autoplay, 4500);
 }
