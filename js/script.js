function myFunction(x) {
    if (x.matches) { // If media query matches
      menu.style.display = "none";
      slideshow.style.display = "none";
      iconresponsive.style.display = "block";

    } else {
     menu.style.display = "block";
     slideshow.style.display = "block";
     iconresponsive.style.display = "none";
    }
  }
  var iconresponsive = document.querySelector(".icon-responsive");
  var menu = document.querySelector(".menu");
  var slideshow = document.querySelector(".slideshow");
  var x = window.matchMedia("(max-width: 815px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)

  iconresponsive.addEventListener('click', function(){
      $(".menu").slideToggle(1000);
  })
  
  window.addEventListener("DOMContentLoaded", function(){
    $("body").fadeIn(2000);
  })
 

  jQuery(function($){
    $("li.main-button").click(function(){$.scrollTo($('.body'),500);});
    $(".upbutton").click(function(){$.scrollTo($('.container-fluid'),500);});
    $("li.services-button").click(function(){$.scrollTo($('.services'),500);});  
    $("li.about-button").click(function(){$.scrollTo($('.about'),500);});
    $("li.galery-button").click(function(){$.scrollTo($('.projects'),500);}); 
    $("li.projects-button").click(function(){$.scrollTo($('.projects'),500);});
    $("li.contact-button").click(function(){$.scrollTo($('.contact'),500);});  
});

$(window).scroll(function()
{
  if($(this).scrollTop() > 100) $(".upbutton").fadeIn(2000);
  else $(".upbutton").fadeOut(1000);
});

