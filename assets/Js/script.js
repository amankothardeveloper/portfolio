// Wait for DOM to be ready
$(document).ready(function () {
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  const wrapper = document.querySelector("#smooth-wrapper");
  const content = document.querySelector("#smooth-content");

  if (wrapper && content) {
    let scrollHeight;

    function setHeight() {
      scrollHeight = content.scrollHeight;
      document.body.style.height = scrollHeight + "px";
    }

    setHeight();
    window.addEventListener("resize", setHeight);

    // Smooth scroll animation
    gsap.to(content, {
      y: () => -(scrollHeight - window.innerHeight),
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: () => `+=${scrollHeight - window.innerHeight}`,
        scrub: 1,
        invalidateOnRefresh: true
      }
    });
  }

  // Custom cursor
  const dot = $(".dot");
  let currentX = 0;
  let currentY = 0;
  let x = 0;
  let y = 0;
  const animationSpeed = 8;

  $(window).on("mousemove", function (e) {
    x = e.clientX;
    y = e.clientY;
  });

  function move() {
    currentX += (x - currentX) / animationSpeed;
    currentY += (y - currentY) / animationSpeed;

    dot.css({
      transform: "translate(" + currentX + "px, " + currentY + "px)"
    });

    requestAnimationFrame(move);
  }

  move();
});
