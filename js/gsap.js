// -------------------------------------
// GSAPバージョン
// -------------------------------------
// プラグインを登録
gsap.registerPlugin(ScrollTrigger);
window.addEventListener("DOMContentLoaded", async () => {
    const stagger = 0.05;

    gsap.utils.toArray(".p-skill__item").forEach((el) => {
        const q = gsap.utils.selector(el);

        gsap
            .timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top 100%",
                },
            })
            .fromTo(
                // あしらいとしての矩形
                q(".rect"),
                {
                    x: "-100%",
                },
                {
                    x: "100%",
                    duration: 1,
                    stagger,
                    ease: "power3.inout",
                },
            )
            .fromTo(
                q(".label"),
                {
                    alpha: 0,
                },
                {
                    alpha: 1,
                    duration: 0.3,
                    delay: 0.8,
                    stagger,
                },
                "<",
            )
            .fromTo(
                q(".p-skill__number"),
                {
                    // scale: 2,
                    alpha: 0,
                },
                {
                    alpha: 1,
                    duration: 0.3,
                    delay: 0.5,
                    stagger,
                },
                "<",
            )
            .fromTo(
                q(".slideX"),
                {
                    alpha: 0,
                    x: -52,
                },
                {
                    alpha: 1,
                    x: 0,
                    duration: 0.75,
                    delay: 0.2,
                    stagger,
                    ease: "power3.out",
                },
                "<",
            );
    });
});


gsap.from(".p-about__js span", {
    autoAlpha: 0,
    duration: 1,
    ease: "power4.out",
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.p-about__js',
        start: 'top 50%', //triggerの上端が、画面の高さの75%の位置に来たら

    }
});
gsap.from(".p-works__js span", {
    autoAlpha: 0,
    duration: 1,
    ease: "power4.out",
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.p-works__js',
        start: 'top 50%', //triggerの上端が、画面の高さの75%の位置に来たら

    }
});
gsap.from(".p-skill__js span", {
    autoAlpha: 0,
    duration: 1,
    ease: "power4.out",
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.p-skill__js',
        start: 'top 50%', //triggerの上端が、画面の高さの75%の位置に来たら

    }
});

gsap.from(".p-strong__js", {
    autoAlpha: 0,
    duration: 1,
    x: -52,
    scrollTrigger: {
        trigger: '.p-strong__js',
        start: 'top 75%', //triggerの上端が、画面の高さの75%の位置に来たら

    }
});

gsap.from(".h3__js span", {
    autoAlpha: 0,
    duration: 1,
    ease: "power4.out",
    stagger: {
        each: 0.08, // ばらす間隔（秒）
        from: "random" // ランダムに開始
    },
    scrollTrigger: {
        trigger: ".h3__js",
        start: "top 100%",
    },
});



gsap.from(".p-scroll", {
    y: 40,
    duration: 1,
    repeat: -1, //ずっと繰り返す
    yoyo: true,
});



gsap
    .timeline({
        scrollTrigger: {
            trigger: ".p-about",
            start: "top 75%",
        },
    })
    .fromTo(
        ".p-about__img",
        {
            autoAlpha: 0,
        },
        {
            autoAlpha: 1,
            duration: 0.3,
            delay: 0.8,
        },
        "<",
    )
    .fromTo(".p-about__text",
        {
            autoAlpha: 0,
            x: -52,
        },
        {
            autoAlpha: 1,
            x: 0,
            duration: 0.3,
            delay: 0.5,
        },
        "<",
    )


gsap.to(".p-works__ringPC img", {
    rotation: 3600,
    scrollTrigger: {
        trigger: '.p-works__ringPC',
        start: 'top 50%',
        scrub: true, //スクロール量に応じて動かす
        pin: true, //ピン留め
        markers: true,
        endTrigger: ".p-works",
        end: "bottom bottom",
    }
});

gsap.to(".p-works__title h2", {
    scrollTrigger: {
        trigger: '.p-works__title',
        start: 'top 3%',
        scrub: true, //スクロール量に応じて動かす
        pin: true, //ピン留め
        markers: true,
        endTrigger: ".p-works",
        end: "center",
    }
});

