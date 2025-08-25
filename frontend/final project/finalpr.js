function toggleMenu(x) {
    x.classList.toggle("change");
    var menu = document.querySelector(".menu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

document.getElementById("flug").addEventListener("click", function() {
    window.location.href = 'final.html';
});




document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });

document.getElementById("fruitButton").addEventListener("click", function() {
    window.location.href = 'https://en.wikipedia.org/wiki/Fruit';
});

document.getElementById("vegtablesbutton").addEventListener("click", function() {
    window.location.href = 'https://en.wikipedia.org/wiki/Vegetable';
});

document.getElementById("nutsButton").addEventListener("click", function() {
    window.location.href = 'https://en.wikipedia.org/wiki/Nut_(fruit)';
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('name').value;
    var password = document.getElementById('email').value;
    var password = document.getElementById('message').value;
    window.location.href = 'https://www.vegansociety.com/';
});

const scrollarrow =
document.getElementById("scrollarrow");
scrollarrow.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    } );
};