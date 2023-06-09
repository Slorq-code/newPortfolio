/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== Modals ===============*/

const openModalJavascript = document.getElementById("javaScript");
const openModalCss = document.getElementById("css");
const openModalHtml = document.getElementById("html");
const openModalReact = document.getElementById("react");
const openModalVue = document.getElementById("vue");
const openModalGit = document.getElementById("git");
const openModalDart = document.getElementById("dart");
const openModalFlutter = document.getElementById("flutter");
const openModalReactNative = document.getElementById("reactNative");
//aboutme
const openModalPiano = document.getElementById("piano");
const openModalBooks = document.getElementById("books");
const openModalSports = document.getElementById("sports");

const closeModalJavascript = document.getElementById("closeJavascript");
const closeModalCss = document.getElementById("closeCss");
const closeModalHtml = document.getElementById("closeHtml");
const closeModalReact = document.getElementById("closeReact");
const closeModalVue = document.getElementById("closeVue");
const closeModalGit = document.getElementById("closeGit");
const closeModalDart = document.getElementById("closeDart");
const closeModalFlutter = document.getElementById("closeFlutter");
const closeModalReactNative = document.getElementById("closeReactNative");
//about me
const closeModalPiano = document.getElementById("closePiano");
const closeModalBooks = document.getElementById("closeBooks");
const closeModalSports = document.getElementById("closeSports");

const skillsModalJavaScript = document.getElementById("skills-modal-javascript");
const skillsModalCss = document.getElementById("skills-modal-css");
const skillsModalHtml = document.getElementById("skills-modal-html");
const skillsModalReact = document.getElementById("skills-modal-react");
const skillsModalVue = document.getElementById("skills-modal-vue");
const skillsModalGit = document.getElementById("skills-modal-git");
const skillsModalDart = document.getElementById("skills-modal-dart");
const skillsModalFlutter = document.getElementById("skills-modal-flutter");
const skillsModalReactNative = document.getElementById("skills-modal-reactNative");
// about me
const aboutMeModalPiano = document.getElementById("aboutMe-modal-piano");
const aboutMeModalBooks = document.getElementById("aboutMe-modal-books");
const aboutMeModalSports = document.getElementById("aboutMe-modal-sports");

const overflow = document.getElementById("modalOverflow");

function configureModal(openButton, closeButton, modal) {
    openButton.addEventListener("click", function() {
      modal.classList.add("show");
      document.documentElement.scrollTop = 0;
      overflow.classList.add("overFlowHidden");
    });
  
    closeButton.addEventListener("click", function() {
      modal.classList.remove("show");
      overflow.classList.remove("overFlowHidden");
      document.documentElement.scrollTop = 1000;
    });
  }

  // Ejemplo de uso para el modal de JavaScript
configureModal(openModalJavascript, closeModalJavascript, skillsModalJavaScript);

  // Ejemplo de uso para el modal de CSS
configureModal(openModalCss, closeModalCss, skillsModalCss);

// Ejemplo de uso para el modal de HTML
configureModal(openModalHtml, closeModalHtml, skillsModalHtml);

// Ejemplo de uso para el modal de React
configureModal(openModalReact, closeModalReact, skillsModalReact);

// Ejemplo de uso para el modal de Vue
configureModal(openModalVue, closeModalVue, skillsModalVue);

// Ejemplo de uso para el modal de Git
configureModal(openModalGit, closeModalGit, skillsModalGit);

// Ejemplo de uso para el modal de Dart
configureModal(openModalDart, closeModalDart, skillsModalDart);

// Ejemplo de uso para el modal de Flutter
configureModal(openModalFlutter, closeModalFlutter, skillsModalFlutter);

// Ejemplo de uso para el modal de React Native
configureModal(openModalReactNative, closeModalReactNative, skillsModalReactNative);

// Ejemplo de uso para el modal de Piano
configureModal(openModalPiano, closeModalPiano, aboutMeModalPiano);

// Ejemplo de uso para el modal de Books
configureModal(openModalBooks, closeModalBooks, aboutMeModalBooks);

// Ejemplo de uso para el modal de Sports
configureModal(openModalSports, closeModalSports, aboutMeModalSports);

  


/*=============== TRANSLATION THEME ===============*/

let check=document.querySelector(".check");

check.addEventListener("click", idioma);

function idioma() {
    let id=check.checked;
    if(id==true) {
        location.href="../../es.html"
    }else {
        location.href="../../index.html"
    }
}


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
    if (selectedTheme === 'dark') {
        animationScroll.src = '../assets/img/recursos/flechaAnimation2.png';
    } else {
        animationScroll.src = '../assets/img/recursos/flechaAnimation.png';
    }
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

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, {delay: 500})
sr.reveal(`.profile__profession`, {delay: 600})
sr.reveal(`.profile__social`, {delay: 700})
sr.reveal(`.profile__info-group`, {interval: 100, delay: 700})
sr.reveal(`.profile__buttons`, {delay: 800})
sr.reveal(`.filters__content`, {delay: 900})
sr.reveal(`.filters`, {delay: 1000})


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