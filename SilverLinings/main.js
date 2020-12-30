gsap.registerPlugin(ScrollTrigger);

gsap.to(".img1", {
  scrollTrigger: {
    trigger: ".img1",
    start: "top center",
    toggleActions: "restart pause restart pause",
  },
  duration: 3,
  opacity: 0.7,
});

gsap.to(".img2", {
  scrollTrigger: {
    trigger: ".img2",
    start: "top center",
    toggleActions: "restart pause restart pause",
  },
  duration: 3,
  opacity: 0.7,
});

gsap.to(".img3", {
  scrollTrigger: {
    trigger: ".img3",
    start: "top center",
    toggleActions: "restart pause restart pause",
  },
  duration: 3,
  opacity: 0.7,
});

gsap.to(".img4", {
  scrollTrigger: {
    trigger: ".img4",
    start: "top center",
    toggleActions: "restart pause restart pause",
  },
  duration: 3,
  opacity: 0.7,
});
