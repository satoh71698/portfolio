btn = document.querySelector('.c-menu')
hg = document.querySelector('.p-menu')
li = document.querySelector(".l-hgMenu__js")


btn.addEventListener("click", function () {
    if (btn.classList.contains("is-active")) {
        btn.classList.toggle("is-active")
        hg.classList.toggle("is-active")
    } else {
        btn.classList.toggle("is-active")
        hg.classList.toggle("is-active")
        gsap.fromTo(".l-hgMenu__js", { x: 200, autoAlpha: 0 }, {
            x: 0,
            autoAlpha: 1,
            duration: 1,
            stagger: 0.15,
            repeatDelay: 1,
        });
    }
})
