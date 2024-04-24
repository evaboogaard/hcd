const vasilis = document.getElementById('vasilis');
const espen = document.getElementById('espen');
const duimpie = document.querySelector(".e.agreement");
const laughingTriggers = document.querySelectorAll(".laughing-trigger");
let animationPlayed = false;

if (laughingTriggers) {
    laughingTriggers.forEach(laughingTrigger => {
        gsap.to(laughingTrigger, {
            scrollTrigger: {
                trigger: laughingTrigger,
                start: 'top 60%',
                end: 'bottom 60%',
                onEnter: () => {
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
                }
            }
        });
    });
}


const neutralTrigger = document.querySelectorAll(".neutral-trigger");

if(neutralTrigger){
    gsap.to(neutralTrigger, {
        scrollTrigger: {
            trigger: neutralTrigger,
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: true
        },
        onComplete: () => {
            vasilis.classList.add('neutral');
            espen.classList.add('neutral');
        }
    })
}

gsap.to(neutralTrigger, {
    scrollTrigger: {
        trigger: neutralTrigger,
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: true
    },
        onReverseComplete: () => {
            vasilis.classList.remove('neutral');
            espen.classList.remove('neutral');
        }
    }
);

const agreementTrigger = document.querySelectorAll('.agreement-trigger')
const agreements = document.querySelectorAll('.agreement')

if(agreementTrigger){
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
        }
    })
}

const birdie = document.getElementById('birdie');
const birdieTrigger = document.querySelector('.birdie-trigger');

if (birdie) {
  gsap.from(birdie, {
    scale: 0.9,
    x: "-15vw",
    y: "15vh",
    duration: 3,
    scrub: true,
    }
  );
}

if (birdieTrigger){
    gsap.to(birdie, {
        scrollTrigger: {
            trigger: birdieTrigger,
            start: 'top 60%',
            end: 'center 60%',
            scrub: true,
        },
        onComplete: () => {
            birdie.classList.add('fly-away');
        }
    })
}