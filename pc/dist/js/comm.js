var sidebar = new StickySidebar(".sidebar", {
  topSpacing: 223,
  // bottomSpacing: 100,
  containerSelector: ".wrap",
  innerWrapperSelector: ".sidebar__inner",
});

// nav
$(function () {
  $(".depth1 > li").mouseover(function () {
    $(this).find(".depth2").stop().slideDown(400);
    $(this).addClass("on");
  });
  $(".depth1 > li").mouseleave(function () {
    $(this).find(".depth2").stop().slideUp(400);
  });
});

const showAnim = gsap
  .from(".head_inner", {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  })
  .progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
  },
});
