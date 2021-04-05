const tl = gsap.timeline({ defaults: { ease: "power1.out" } })

tl.fromTo('.text > p', { opacity: 0, y: '25%' }, { y: '0%', opacity: 1, duration: 1, delay: .5 })
tl.fromTo('.nav-items > li', { opacity: 0, y: '-25%' }, { y: '0%', opacity: 1, duration: 0.5, stagger: 0.15 }, '-=1')
tl.fromTo('.navbar > h1', { opacity: 0, x: '25%' }, { x: '0%', opacity: 1, duration: 0.5, delay: 0.5 }, '-=1')
tl.fromTo('.btn-primary', { opacity: 0, x: '-50%' }, { x: '0%', opacity: 1, duration: 0.5, delay: 1 }, '-=1')

let open = false

$(document).ready(() => {
    window.scrollTo(0, 0)

    $("div.github").click((e) => {
        location.href = `https://github.com/coyotecodesalot/${$(e.target).attr("repository")}`
    })

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

    $(".nav-links > li").click(e => {
        $(".nav-mobile").removeClass("open")
        $([document.documentElement, document.body]).animate({
            scrollTop: $($(e.target).attr("to")).offset().top
        }, 600);
        open = false
    })

    $(".bars").click(() => {
        if (open) {
            $(".nav-mobile").removeClass("open")
            $(".nav-links > li").each((_, elem) => {
                $(elem).css("opacity", "0")
            })
            open = false
        } else if (!open) {
            $(".nav-mobile").addClass("open")
            const tl2 = gsap.timeline({ defaults: { ease: "power1.out" } })
            tl2.fromTo('.nav-links > li', { opacity: 0, x: '-25%' }, { x: '0%', opacity: 1, duration: 0.5, stagger: 0.15, delay: 0.2 })
            open = true
        }


    })
})
