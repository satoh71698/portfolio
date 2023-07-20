const area = document.querySelector(".l-scroll");
const panels = document.querySelectorAll(".l-scroll__js");
const length = panels.length;

const itemSwitch = (progress) => {
    const snapVal = gsap.utils.snap(1, progress * length - 0.5); //0 , 1 , 2...length
    const clampVal = gsap.utils.clamp(0, length - 1, snapVal); //0 ～ length -1 の間に収める
    panels.forEach((item, index) => {
        if (index <= clampVal) {
            item.classList.add("is-active");
        } else {
            item.classList.remove("is-active");
        }
    });
}
itemSwitch(0);

ScrollTrigger.create({
    trigger: area,
    start: "top 0",
    end: "+=1000%",
    scrub: true,
    pin: true,
    // markers: true,
    onUpdate: (self) => itemSwitch(self.progress),
    onLeaveBack: () => itemSwitch(0),
    onLeave: () => itemSwitch(1),
});


const text = new SplitType(".is-text")

gsap.from(".char", {
    y: 200,
    autoAlpha: 0,
    duration: 0.5,
    stagger: 0.02,
    repeatDelay: 1,
    scrollTrigger: {
        trigger: '.is-text',
        start: 'top 75%',
        // markers: true,
    }
});


const tl = gsap.timeline({
    defaults: {
        ease: Power1.easeIn, duration: 2
    }
});
tl
    .fromTo('.l-open', { autoAlpha: 1.0 }, { autoAlpha: 0, ease: Power3.easeIn }, "<")
    .fromTo('.l-open__content', { autoAlpha: 0 }, { autoAlpha: 1, ease: Back.easeOut }, '<')
    .from(".appearance", {
        y: 200,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.65,
        repeatDelay: 1,
    }, ">");