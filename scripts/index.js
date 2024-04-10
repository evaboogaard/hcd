// Selecteer de doelelementen
const vasilis = document.getElementById('vasilis');
const espen = document.getElementById('espen');
const cueLaugh = document.querySelector('.cue-laugh');
const cueLaugh2 = document.querySelector('.cue-laugh-2');
const duimpie = document.querySelector(".e.agreement");
const cueAgreement = document.querySelector(".cue-agreement");

// Opties voor de Intersection Observer
const optionsLaugh = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Verander de drempel naar 0.5
};

const optionsAgreement = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Verander de drempel naar 0.5
};

// Callback-functie voor de Intersection Observer voor 'laugh'
const callbackLaugh = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Voeg de klasse 'laugh' toe aan de elementen wanneer ze uit het zicht zijn
      vasilis.classList.add('laugh');
      espen.classList.add('laugh');
      console.log('ja hoi wereld');
    } else {
      // Verwijder de klasse 'laugh' als de elementen weer in het zicht zijn
      vasilis.classList.remove('laugh');
      espen.classList.remove('laugh');
    }
  });
};

// Callback-functie voor de Intersection Observer voor 'agreement'
const callbackAgreement = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.5) {
      // Voeg de klasse 'show' toe aan '.agreement.e' wanneer 50% in beeld is
      duimpie.classList.add('show');
    }
  });
};

// Maak een nieuwe Intersection Observer voor 'laugh'
const observerLaugh = new IntersectionObserver(callbackLaugh, optionsLaugh);

// Maak een nieuwe Intersection Observer voor 'agreement'
const observerAgreement = new IntersectionObserver(callbackAgreement, optionsAgreement);

// Observeer de doelelementen
observerLaugh.observe(cueLaugh);
observerLaugh.observe(cueLaugh2);
observerAgreement.observe(cueAgreement);