

var cartCount = 0;
var currentSlide = 0;
var totalSlides = 3;
var sliderInterval;


window.onscroll = function() {
  var nav = document.getElementById("navbar");
  nav.style.boxShadow = window.scrollY > 60
    ? "0 4px 20px rgba(0,0,0,0.6)"
    : "0 2px 10px rgba(0,0,0,0.4)";
};

var hamburger = document.getElementById("hamburger");
var navLinks  = document.getElementById("navLinks");

hamburger.onclick = function() {
  if (navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
  } else {
    navLinks.classList.add("open");
  }
};


var linkItems = navLinks.getElementsByTagName("a");
for (var i = 0; i < linkItems.length; i++) {
  linkItems[i].onclick = function() {
    navLinks.classList.remove("open");
  };
}


function goToSlide(index) {
  var slider = document.getElementById("heroSlider");
  var dots   = document.getElementsByClassName("dot");

  currentSlide = index;

  
  slider.style.transform = "translateX(-" + (index * 33.333) + "%)";

  for (var d = 0; d < dots.length; d++) {
    dots[d].classList.remove("active-dot");
  }
  dots[index].classList.add("active-dot");
}

function autoSlide() {
  goToSlide((currentSlide + 1) % totalSlides);
}

sliderInterval = setInterval(autoSlide, 4000);


var heroSection = document.querySelector(".hero");
heroSection.onmouseenter = function() { clearInterval(sliderInterval); };
heroSection.onmouseleave = function() { sliderInterval = setInterval(autoSlide, 4000); };

function filterProducts(category) {
  var cards   = document.getElementsByClassName("product-card");
  var btns    = document.getElementsByClassName("filter-btn");

  
  for (var b = 0; b < btns.length; b++) {
    btns[b].classList.remove("active-filter");
    var txt = btns[b].textContent.trim().toLowerCase();
    if (txt === category || (category === "all" && txt === "all")) {
      btns[b].classList.add("active-filter");
    }
  }

  
  for (var c = 0; c < cards.length; c++) {
    var cat = cards[c].getAttribute("data-cat");
    if (category === "all" || cat === category) {
      cards[c].style.display = "block";
      // fade in
      (function(card) {
        setTimeout(function() { card.style.opacity = "1"; }, 50);
      })(cards[c]);
    } else {
      cards[c].style.display = "none";
    }
  }
}


function addToCart(btn) {
  cartCount++;

  var badge = document.getElementById("cartCount");
  badge.innerHTML = cartCount;

  // quick bounce on cart icon
  var cartIcon = document.getElementById("cartIcon");
  cartIcon.style.transform = "scale(1.4)";
  setTimeout(function() {
    cartIcon.style.transform = "scale(1)";
  }, 250);

  showToast();
}


function showToast() {
  var toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(function() {
    toast.classList.remove("show");
  }, 2500);
}


function subscribeNews(e) {
  e.preventDefault();

  var email  = document.getElementById("newsEmail").value;
  var msgBox = document.getElementById("newsMsg");

  if (email.indexOf("@") !== -1 && email.indexOf(".") !== -1) {
    msgBox.innerHTML  = "🎉 Thanks for subscribing! Welcome to AJIO.";
    msgBox.style.color = "#1a1a2e";
    document.getElementById("newsEmail").value = "";
  } else {
    msgBox.innerHTML  = "Please enter a valid email address.";
    msgBox.style.color = "#c0392b";
  }

  setTimeout(function() { msgBox.innerHTML = ""; }, 4000);
}


var anchorLinks = document.querySelectorAll("a[href^='#']");
for (var n = 0; n < anchorLinks.length; n++) {
  anchorLinks[n].onclick = function(e) {
    var id = this.getAttribute("href");
    if (id === "#") return;
    var target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
}


window.addEventListener("load", function() {
  var cards = document.getElementsByClassName("product-card");
  for (var j = 0; j < cards.length; j++) {
    cards[j].style.opacity    = "0";
    cards[j].style.transform  = "translateY(30px)";
    cards[j].style.transition = "opacity 0.5s ease, transform 0.5s ease";
  }
});

window.addEventListener("scroll", function() {
  var cards = document.getElementsByClassName("product-card");
  for (var i = 0; i < cards.length; i++) {
    var rect = cards[i].getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      cards[i].style.opacity   = "1";
      cards[i].style.transform = "translateY(0)";
    }
  }
});