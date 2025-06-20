// Preloader

$(window).on('load', function() {
  $('#preloader').addClass("loaded");
});

// Slide down navbar command

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    document.getElementById("navbar").style.top = "0";
  } 
  else {
    document.getElementById("navbar").style.top = "-550px";
  }
}

// New Swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  loop: true,
});

var swiper = new Swiper(".mySwiper-mobile", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  loop: true,
});


// // Swiper 

// var swiper = new Swiper('.swiper-container', {
//    slidesPerView: 3,
//    spaceBetween: 30,
//    grabCursor: true,
//    navigation: {
//      nextEl: '.swiper-button-next',
//      prevEl: '.swiper-button-prev',
//    },
//  });

// var swiper = new Swiper('.swiper-container-mobile', {
//    slidesPerView: 1,
//    spaceBetween: 50,
//    grabCursor: true,
//  });

// Text loop

var example = ['medical student', 'student researcher', 'software developer', 'diehard leafs fan'];

textSequence(0);
function textSequence(i) {

    if (example.length > i) {
        setTimeout(function() {
            document.getElementById("sequence").innerHTML = example[i];
            textSequence(++i);
        }, 3000); // 1 second (in milliseconds)
    } else if (example.length == i) { // Loop
        textSequence(0);
    }
}

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 400;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
};

// Fade Effect on Elements

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();      
      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else {
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll();
});

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade-mobile").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();      
      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity")==0) {$(this).fadeTo(400,1);}
      } else {
        if ($(this).css("opacity")==1) {$(this).fadeTo(400,0);}
      }
    });
  }).scroll();
});