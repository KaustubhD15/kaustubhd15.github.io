$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
});

// disable developer mode
document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}



let currentIndex = 0; // Tracks the current visible recommendation

function moveNext() {
  const boxContainer = document.querySelector(".box-container");
  const boxes = document.querySelectorAll(".recommendation-box");
  currentIndex = (currentIndex + 1) % boxes.length; // Move to the next box
  boxContainer.style.transform = `translateX(-${currentIndex * 100}%)`; // Slide to the next box
}

function movePrev() {
  const boxContainer = document.querySelector(".box-container");
  const boxes = document.querySelectorAll(".recommendation-box");
  currentIndex = (currentIndex - 1 + boxes.length) % boxes.length; // Move to the previous box
  boxContainer.style.transform = `translateX(-${currentIndex * 100}%)`; // Slide to the previous box
}