/*
// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".nav-container");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}*/

const words = ["JAVA DEVELOPER", "SPIGOT DEVELOPER", "PAPER DEVELOPER", "MINECRAFT DEVELOPER"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = '';
let isDeleting = false;
const label = document.querySelector('.typewriter-cursor');
const span = document.querySelector('.typewriter-text');
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;
function type() {
    const fullWord = words[wordIndex];
    
    if (!isDeleting) {
        currentWord = fullWord.substring(0, charIndex + 1);
        charIndex++;
    } else {
        currentWord = fullWord.substring(0, charIndex - 1);
        charIndex--;
    }

    span.textContent = currentWord;

    if (!isDeleting && charIndex === fullWord.length) {
        isDeleting = true;
        label.textContent = '|'
        setTimeout(type, pauseTime); // Pausa prima di cancellare
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Alterna tra le parole
        setTimeout(type, typingSpeed);
    } else {
        label.textContent = ''
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }
}

type();