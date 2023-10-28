

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
