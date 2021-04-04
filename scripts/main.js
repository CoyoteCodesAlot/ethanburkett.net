const tl = gsap.timeline({ defaults: { ease: "power1.out" } })

tl.fromTo('.text > p', { opacity: 0, y: '25%' }, { y: '0%', opacity: 1, duration: 1, delay: .5 })
tl.fromTo('.nav-items > li', { opacity: 0, y: '-25%' }, { y: '0%', opacity: 1, duration: 0.5, stagger: 0.15 }, '-=1')
tl.fromTo('.navbar > h1', { opacity: 0, x: '25%' }, { x: '0%', opacity: 1, duration: 0.5, delay: 0.5 }, '-=1')
tl.fromTo('.btn-primary', { opacity: 0, x: '-50%' }, { x: '0%', opacity: 1, duration: 0.5, delay: 1 }, '-=1')

$(document).ready(() => {
    window.scrollTo(0,0)
    $(".scrollTo").click((e) => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $($(e.target).attr("to")).offset().top
        }, 600);
    })
    $(".nav-items > li").click((e) => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $($(e.target).attr("to")).offset().top
        }, 600);
    })
})