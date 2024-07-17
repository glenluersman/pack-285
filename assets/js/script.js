topBtn = document.getElementById("myBtn");

function openNav() {
  document.getElementById("myMobilenav").style.display = "block";
  document.getElementById("myMobilenav").style.height = "450px";
  document.getElementById("main").style.marginBottom = "480px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("myMobilenav").style.height = "0";
  document.getElementById("main").style.marginBottom = "30px";
  document.body.style.backgroundColor = "#ddd2bb";
  document.getElementById("myMobilenav").style.display = "none";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function showText() {
  document.getElementById("dancing-turtle").style.display="block"; 
}