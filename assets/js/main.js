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

/*=============== DARK LIGHT THEME ===============*/

// src="./assets/img/recursos/flechaAnimation2.png"

const themeButton = document.getElementById('theme-button')
const animationScroll = document.getElementById('objetAnimation')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
    cambiarImagenModo(selectedTheme)
}

function cambiarImagenModo(selectedTheme) {
    if (animationScroll && selectedTheme !== null && selectedTheme !== undefined) {
      if (selectedTheme === 'dark') {
        animationScroll.src = '../assets/img/recursos/flechaAnimation2.png';
      } else {
        animationScroll.src = '../assets/img/recursos/flechaAnimation.png';
      }
    } else {}
  }

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    const currentTheme = getCurrentTheme();
    cambiarImagenModo(currentTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
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


// ======================================================  efecto Splash

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
  origin: 'left',
  distance: '60px',
  duration: 2600,
  delay: 400,
})

sr.reveal(`.profile__border`, {delay: 2000, origin: "right" })
sr.reveal(`.profile__name`, {delay: 3600})
sr.reveal(`.profile__profile`, {delay: 3650, origin: "right" })
sr.reveal(`.profile__profession`, {delay: 3700})
sr.reveal(`.profile__social`, {delay: 3800, origin: "right" })
sr.reveal(`.profile__info-group`, {interval: 400, delay: 3900})
sr.reveal(`.profile__buttons`, {delay: 4000, origin: "right" })
sr.reveal(`.floatButtonMobileContainer`, {delay: 4100})
sr.reveal(`.filters__content`, {delay: 4200, origin: "right" })
sr.reveal(`.containerAnimation`, {delay: 4250})
sr.reveal(`.filters`, {delay: 5000, origin: "right" })
sr.reveal(`.floatButtonContainer`, {delay: 5500,})

