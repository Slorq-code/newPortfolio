/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tc => {
      tc.classList.remove('filters__active')
    })

    setTimeout(() => {
      tabContents.forEach(tc => {
        tc.style.display = 'none';
      })
      target.style.display = 'grid';
      target.classList.add('filters__active');
    }, 500);

    tabs.forEach(t => {
      t.classList.remove('filter-tab-active')
    })

    tab.classList.add('filter-tab-active')
  })
})

/*=============== MOUSE ANIMATION ===============*/

const containerAnimation = document.querySelector('.containerAnimation');
function ocultarElemento() {
    containerAnimation.style.opacity = '0';
    containerAnimation.style.transition = 'opacity 1s';
    setTimeout(function() {
        containerAnimation.style.display = 'none';
    }, 1000)
}
setTimeout(ocultarElemento, 7500);


//  ================== botton para las animaciones de contact me


function scrollTopAndAnimate(...ids) {
  const scrollToTop = () => {
    if (document.documentElement.scrollTop > 0) {
      document.documentElement.scrollBy(0, -50);
      requestAnimationFrame(scrollToTop);
    } else {
      // Al llegar al tope, agregar la clase para iniciar la animación a los elementos seleccionados por sus IDs
      ids.forEach((id) => {
        const elementToAnimate = document.getElementById(id);
        if (elementToAnimate) {
          elementToAnimate.classList.add("earthquake-animation2");
          setTimeout(() => {
            elementToAnimate.classList.remove("earthquake-animation2");
          }, 2000);
        }
      });
    }
  };
  
  scrollToTop();
}


/*=============== Splash ===============*/

const splash = document.getElementById("splash") 
function displayNoneSplash() {
    setTimeout(()=> {
      splash.classList.remove("splash")
      splash.classList.add("splashHidden")
    }, 3500)   
}
displayNoneSplash()

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '20px',
  duration: 2600,
  delay: 400,
})

sr.reveal(`.profile__border`, {delay: 2000, })
sr.reveal(`.profile__name`, {delay: 3600})
sr.reveal(`.profile__profile`, {delay: 3650, })
sr.reveal(`.profile__profession`, {delay: 3700})
sr.reveal(`.profile__social`, {delay: 3800, })
sr.reveal(`.profile__info-group`, {interval: 400, delay: 3900})
sr.reveal(`.profile__buttons`, {delay: 4000, })
sr.reveal(`.floatButtonMobileContainer`, {delay: 4100})
sr.reveal(`.filters__content`, {delay: 4200, })
sr.reveal(`.containerAnimation`, {delay: 4250})
sr.reveal(`.filters`, {delay: 5000, })
sr.reveal(`.floatButtonContainer`, {delay: 5500,})