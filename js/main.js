const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 200) {
    gsap.to(toTopEl, .2, {
      x:0,
      display: 'block'
    });
  } else {
    gsap.to(toTopEl, .2, {
      x:50,
      display: 'none'
    });
  }
},300));

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
})

const aboutEl = document.querySelector('#aabout');
const productEl = document.querySelector('#ppro');
const emailEl = document.querySelector('#eemail');

aboutEl.addEventListener('click', function() {
  gsap.to(window, .3, {
    scrollTo: 0
  })
})
productEl.addEventListener('click', function() {
  gsap.to(window, .5, {
    scrollTo: 700
  })
})
emailEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 2350
  })
})

const springEl = document.querySelector('#spring');
const weavingEl = document.querySelector('#weaving');
const meshEl = document.querySelector('#mesh');
const ropingEl = document.querySelector('#roping');
const ropeEl = document.querySelector('#rope');

springEl.addEventListener('click', function() {
  gsap.to(window, .5, {
    scrollTo: 700
  })
})
weavingEl.addEventListener('click', function() {
  gsap.to(window, .5, {
    scrollTo: 1200
  })
})
meshEl.addEventListener('click', function() {
  gsap.to(window, .5, {
    scrollTo: 1560
  })
})
ropingEl.addEventListener('click', function() {
  gsap.to(window, .5, {
    scrollTo: 1940
  })
})
ropeEl.addEventListener('click', function() {
  gsap.to(window, .5, {
    scrollTo: 2260
  })
})