btn = document.querySelector('.c-menu')
hg = document.querySelector('.p-menu')
by = document.querySelector('body')

btn.addEventListener("click", function () {
    if (btn.classList.contains("is-active")) {
        btn.classList.toggle("is-active")
        hg.classList.toggle("is-active")
        by.classList.toggle("is-active")
    } else {
        btn.classList.toggle("is-active")
        hg.classList.toggle("is-active")
        by.classList.toggle("is-active")
    }
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