btn = document.querySelector('.c-menu')
hg = document.querySelector('.p-menu')
by = document.querySelector('body')
link = document.querySelector('.p-menu__content')

btn.addEventListener("click", function () {
    if (btn.classList.contains("is-active")) {
        btn.classList.remove("is-active")
        hg.classList.remove("is-active")
        by.classList.remove("is-active")
    } else {
        btn.classList.add("is-active")
        hg.classList.add("is-active")
        by.classList.add("is-active")
    }
})
link.addEventListener("click", function () {
    btn.classList.remove("is-active")
    hg.classList.remove("is-active")
    by.classList.remove("is-active")
})


var resize = function () {

    var timeoutID = 0;
    var delay = 500;

    window.addEventListener("resize", function () {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(function () {

            btn.classList.remove("is-active");
            hg.classList.remove("is-active");
            by.classList.remove("is-active");

        }, delay);
    }, false);
};

resize();