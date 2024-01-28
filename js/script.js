// LENIS SCROLL

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
// LENIS SCROLL ENDS

let tl = gsap.timeline();

tl.from("nav .logo, nav .menu ul li, nav .menu button", {
  y: -50,
  delay: 0.7,
  opacity: 0,
  duation: 0.3,
  stagger: 0.2,
});

tl.from(".hi_there, .i_am", {
  opacity: 0,
  duration: 1,
  stagger: 1,
});

tl.to("haeder", {
  scrollTrigger: {
    trigger: "header",
    scroller: "body",
    // markers: true,
    pin: "header",
  },
});

tl.to(
  ".hi_there",
  {
    y: -300,

    scrollTrigger: {
      trigger: ".main_banner",
      scroller: "body",
      // markers: true,
      start: "top 5%",
      end: "top -30%",
      scrub: true,
    },
  },
  "my-name"
);

tl.to(
  ".i_am",
  {
    y: 300,

    scrollTrigger: {
      trigger: ".main_banner",
      scroller: "body",
      //   markers: true,
      start: "top 5%",
      end: "top -30%",
      scrub: true,
    },
  },
  "my-name"
);

tl.to(
  ".main_banner .me",
  {
    opacity: 1,
    scale: 1,
    delay: 1,

    scrollTrigger: {
      trigger: ".main_banner",
      scroller: "body",
      //   markers: true,
      start: "top 5%",
      end: "top -30%",
      scrub: true,
    },
  },
  "my-name"
);

tl.to(
  ".main_banner .me",
  {
    opacity: 0,

    scrollTrigger: {
      trigger: ".main_banner",
      scroller: "body",
      // markers: true,
      start: "top -20%",
      end: "top -40%",
      scrub: true,
    },
  },
  "message"
);

tl.to(
  ".my_message",
  {
    opacity: 1,

    scrollTrigger: {
      trigger: ".main_banner",
      scroller: "body",
      // markers: true,
      start: "top -21%",
      end: "top -40%",
      scrub: 2,
    },
  },
  "message"
);

// my-tech
tl.to(
  ".my_message",
  {
    opacity: 0,
    duration: 1,

    scrollTrigger: {
      trigger: ".main_banner",
      scroller: "body",
      // markers: true,
      start: "top -50%",
      end: "top -60%",
      scrub: 2,
    },
  },
  "my-tech"
);

tl.to(
  ".my_tech",
  {
    opacity: 1,

    scrollTrigger: {
      trigger: ".main_banner",
      scroller: "body",
      // markers: true,
      start: "top -50%",
      end: "top -60%",
      scrub: 2,
    },
  },
  "my-tech"
);


let talk = document.querySelector("#myBtn");
let closeBtn = document.querySelector(".closeBtn");


talk.addEventListener("click", function () {
    var contactMe = document.querySelector(".contact_me");
    contactMe.classList.add("show");
})

closeBtn.addEventListener("click", function () {
    var contactMe = document.querySelector(".contact_me");
    contactMe.classList.remove("show")
})