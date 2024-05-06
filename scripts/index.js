// Constants
const vasilis = document.getElementById('vasilis');
const espen = document.getElementById('espen');
const emojiTrigger = document.querySelector('.emoji-trigger');
const duimpie = document.querySelector('.e.agreement');
const laughingTriggers = document.querySelectorAll('.laughing-trigger');
const menuTrigger = document.querySelector('.menu-trigger');
const tabTrigger = document.querySelector('.tab-trigger');
const tabButton = document.querySelector('.tab-button');
const currentReadingPoint = document.getElementById('current-reading-point');
const moneyTrigger = document.querySelector('.money-trigger');
const agreementTrigger = document.querySelectorAll('.agreement-trigger');
const agreements = document.querySelectorAll('.agreement');
const neutralTrigger = document.querySelectorAll('.neutral-trigger');
const twitterTl = gsap.timeline();
const twitterTrigger = document.querySelector('.twitter-trigger');
const twitterBird = document.querySelector('#bird');
const twitterCursor = document.querySelector('#cursor');
const twitterEl = document.querySelector('#twitter');
const writingTrigger = document.querySelector('.writing-trigger');
const metricsTrigger = document.querySelector('.metrics-trigger');

// Variables
let animationPlayed = false;

// Functions
const playAnimation = () => {
    if (!animationPlayed) {
        vasilis.classList.add('laugh');
        espen.classList.add('laugh');
        animationPlayed = true;
        setTimeout(() => {
            vasilis.classList.remove('laugh');
            espen.classList.remove('laugh');
            animationPlayed = false;
        }, 2000);
    }
};

// Scroll Triggers
if (metricsTrigger) {
    gsap.to(metricsTrigger, {
        scrollTrigger: {
            trigger: metricsTrigger,
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: true,
            onEnter: () => {
                gsap.to('#metrics', { duration: 0.1, display: 'block' });
                gsap.from('#metrics path', {
                    duration: 1.5,
                    drawSVG: 0,
                    stagger: 1,
                    scrub: true,
                });
            },
        },
    });
}

if (writingTrigger) {
    gsap.to(writingTrigger, {
        scrollTrigger: {
            trigger: writingTrigger,
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: true,
            onEnter: () => {
                gsap.to('#writing', { duration: 0.1, display: 'block' });
                gsap.to('#writing-2', { duration: 0.1, display: 'block'});
                gsap.from('#writing path', {
                    duration: 1.5,
                    drawSVG: 0,
                    stagger: 1,
                    scrub: true,
                });
                gsap.from('#writing-2 path', {
                    duration: 3,
                    drawSVG: 0,
                    stagger: 2,
                    scrub: true,

                });
            },
        },
    });
}

if (twitterTrigger) {
    gsap.to(twitterCursor, {
        scrollTrigger: {
            trigger: twitterTrigger,
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: true,
        },
        onComplete: () => {
            twitterTl.to(twitterEl, {
                scale: 1,
                rotate: 360,
                duration: 2,
            });

            twitterTl.to(twitterCursor, {
                x: "-2vw",
                y: "-5vh",
                duration: 2,
                scrub: true,
            });
            
            twitterTl.to(twitterBird, {
                scale: 0.9,
                opacity: .5,
                duration: .25,
            });
            
            twitterTl.to(twitterBird, {
                scale: 1,
                duration: .25,
                yoyo: true,
                repeat: 1,
            });
        },
    });
}


if (moneyTrigger) {
    gsap.to(moneyTrigger, {
        scrollTrigger: {
            trigger: moneyTrigger,
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: true,
        },
        onComplete: () => {
            vasilis.classList.add('money');
        },
    });
}

if (tabTrigger) {
    gsap.to(tabTrigger, {
        scrollTrigger: {
            trigger: tabTrigger,
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: true,
        },
        onComplete: () => {
            tabButton.classList.add('tab-show');
        },
    });
}

if (menuTrigger) {
    gsap.to(menuTrigger, {
        scrollTrigger: {
            trigger: menuTrigger,
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: true,
            onEnter: () => {
                gsap.to('#menu', { duration: 0.1, display: 'block' });
                gsap.from('#menu path', {
                    duration: 1.5,
                    drawSVG: 0,
                    stagger: 0.5,
                });
            },
        },
    });
}

if (emojiTrigger) {
    gsap.to(emojiTrigger, {
        scrollTrigger: {
            trigger: emojiTrigger,
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: true,
        },
        onComplete: () => {
            vasilis.classList.add('show');
            espen.classList.add('show');
            gsap.to(currentReadingPoint, {
                scale: '1',
            });
        },
    });
}

if (laughingTriggers) {
    laughingTriggers.forEach(laughingTrigger => {
        gsap.to(laughingTrigger, {
            scrollTrigger: {
                trigger: laughingTrigger,
                start: 'top 60%',
                end: 'bottom 60%',
                onEnter: playAnimation,
            },
        });
    });
}

if (neutralTrigger) {
    gsap.to(neutralTrigger, {
        scrollTrigger: {
            trigger: neutralTrigger,
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: true,
        },
        onComplete: () => {
            vasilis.classList.add('neutral');
            espen.classList.add('neutral');
        },
        onReverseComplete: () => {
            vasilis.classList.remove('neutral');
            espen.classList.remove('neutral');
        },
    });
}

if (agreementTrigger) {
    gsap.to(agreementTrigger, {
        scrollTrigger: {
            trigger: agreementTrigger,
            start: 'top 60%',
            end: 'center 60%',
            scrub: true,
        },
        onComplete: () => {
            agreements.forEach(agreement => {
                agreement.classList.add('show');
            });
        },
    });
}