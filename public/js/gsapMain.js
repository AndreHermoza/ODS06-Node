gsap.registerPlugin(ScrollTrigger)

gsap.from('.logo div', {
    opacity: 0,
    delay: 1,
    x: 20
})

const menu_items = document.querySelector('.items-menu')
gsap.from(menu_items.children, {
    opacity: 0,
    x: 0,
    duration: .3,
    delay: .5,
    stagger: {
        amount: 1
    }
})

gsap.utils.toArray('.estrellita').forEach(star => {
    gsap.fromTo(star, {
        rotation: 450,
        opacity: 0,
        y: 100
    }, {
        rotation: 0,
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.5,
        scrollTrigger: star
    })
});

gsap.utils.toArray('.title').forEach(title => {
    gsap.fromTo(title, {
        letterSpacing: '10px',
        opacity: 0,
        x: 300,
        skewX: 80
    }, {
        letterSpacing: '',
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: .5,
        delay: .3,
        scrollTrigger: title
    })
})

gsap.utils.toArray('p').forEach(p => {
    gsap.fromTo(p, {
        opacity: 0,
        x: 150,
        skewX: 30,
    }, {
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: .5,
        delay: .3,
        scrollTrigger: p
    })
})


gsap.utils.toArray('button').forEach(button => {
    gsap.fromTo(button, {
        opacity: 0,

    }, {
        opacity: 2,
        duration: 1,
        delay: .5,
        scrollTrigger: button
    })
})

gsap.from('.kidImg', {
    opacity: 0,
    scale: .5,
    duration: 1,
    delay: .5
})

gsap.fromTo('.water', {
    scale: .2,
    opacity: 0,
    skewY: 30
}, {
    scale: 1,
    opacity: 1,
    skewY: 0,
    duration: .5,
    delay: .5,
    scrollTrigger: '.water'
})

gsap.utils.toArray('.line').forEach(line => {
    gsap.fromTo(line, {
        opacity: 0,
        width: "0%",

    }, {
        opacity: 2,
        width: "100%",
        duration: 1,
        delay: .5,
        scrollTrigger: line
    })
})

gsap.utils.toArray('.worldGsap').forEach(rotate => {
    gsap.fromTo(rotate, {
        opacity: 0,
        rotation: 360,
        scale: .2

    }, {
        opacity: 2,
        rotation: 0,
        scale: 1,
        duration: 2,
        delay: .5,
        scrollTrigger: rotate
    })
})



const menu = document.querySelector('.menu')
gsap.from(menu.children, {
    opacity: 0,
    x: 50,
    duration: 1,
    delay: .5,
    stagger: {
        amount: 1
    },
    scrollTrigger:{
        trigger: menu.children
    }
})

// const menu_items = document.querySelector('.items-menu')
// gsap.from(menu_items.children, {
//     opacity: 0,
//     x: 0,
//     duration: 1,
//     delay: 1.5,
//     stagger: {
//         amount: 1
//     }
// })