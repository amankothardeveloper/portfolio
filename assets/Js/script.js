// Wait for DOM to be ready
$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  let smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });

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
      transform: "translate(" + currentX + "px, " + currentY + "px) scale(0.5)",
    });

    requestAnimationFrame(move);
  }

  move();
});
