// var menu = document.querySelector("#nav i");
// var cross = document.querySelector("#full i");

// var tl = gsap.timeline();

// tl.to("#full", {
//   right: 0,
//   duration: 0.8,
// });

// tl.from("#full h4", {
//   x: 150,
//   duration: 0.7,
//   stagger: 0.3,
//   opacity: 0,
// });

// tl.from("#full i", {
//   opacity: 0,
// });

// tl.pause();

// menu.addEventListener("click", function () {
//   tl.play();
// });

var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");

var tl = gsap.timeline({ paused: true });

tl.to("#full", {
  right: 0,
  duration: 0.8,
  ease: "power3.out",
});

tl.from("#full h4", {
  x: 150,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2,
});

tl.from(
  "#full i",
  {
    opacity: 0,
  },
  "-=0.5"
);

// OPEN
menu.addEventListener("click", function () {
  tl.play();
});

// CLOSE
cross.addEventListener("click", function () {
  tl.reverse();
});
