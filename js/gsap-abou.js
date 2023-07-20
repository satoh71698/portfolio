


gsap.registerPlugin('ScrollTrigger');
gsap.fromTo('.p-about__img', { scale: 1.0 }, {
    scale: 0.5,

    scrollTrigger: {
        start: 'center center',// .center要素の上下中央(center)が画面上下中央(center)に差し掛かったら
        scrub: 1,// スクラブアニメーション　数値で慣性を制御
        pin: '.p-about__img',// ピン留めする要素
        // markers: true,
        end: "+=200%",
        onLeave: () => {
            gsap.set('.p-about__name', { autoAlpha: 1 })
            gsap.set('.p-about__profile', { autoAlpha: 1 })
        },
        onLeaveBack: () => {// アニメーション発火位置に下から戻ってきたら
            gsap.set('.p-about__name)', { autoAlpha: 0 })// .center要素以外のfigure要素の非表示
            gsap.set('.p-about__profile', { autoAlpha: 0 })
        },
    }
})


const numWrap = document.querySelector(".p-rool__js");
const rotate_anime = gsap.timeline({
    scrollTrigger: {
        trigger: numWrap,
        start: "top 50%",
        end: () => `+=${document.querySelector(".p-history__wrap").offsetHeight}`,
        pin: true,
        scrub: true,
    },
});
rotate_anime.to(".p-rool__js svg", {
    rotate: 720,
});
