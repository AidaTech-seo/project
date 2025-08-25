function toggleMenu(x) {
    x.classList.toggle("change");
    var menu = document.querySelector(".menu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var activeFlag = localStorage.getItem('activeFlag');
    if (activeFlag) {
        document.getElementById(activeFlag).classList.add('active');
    }
});

document.getElementById("flagy").addEventListener("click", function() {
   
    document.querySelectorAll('.flags img').forEach(flag => {
        flag.classList.remove('active');
    });


    this.classList.add('active');
   
    localStorage.setItem('activeFlag', this.id);
 
    window.location.href = 'finalpr.html';
});


document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
    //   window.scrollTo({
    //     top: targetSection.offsetTop,
    //     behavior: 'smooth'
    //   });
    setTimeout(() => {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }, 9000); 
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