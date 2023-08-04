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

const closeModalJavascript = document.getElementById("closeJavascript");
const closeModalCss = document.getElementById("closeCss");
const closeModalHtml = document.getElementById("closeHtml");
const closeModalReact = document.getElementById("closeReact");
const closeModalVue = document.getElementById("closeVue");
const closeModalGit = document.getElementById("closeGit");
const closeModalDart = document.getElementById("closeDart");
const closeModalFlutter = document.getElementById("closeFlutter");
const closeModalReactNative = document.getElementById("closeReactNative");

const skillsModalJavaScript = document.getElementById("skills-modal-javascript");
const skillsModalCss = document.getElementById("skills-modal-css");
const skillsModalHtml = document.getElementById("skills-modal-html");
const skillsModalReact = document.getElementById("skills-modal-react");
const skillsModalVue = document.getElementById("skills-modal-vue");
const skillsModalGit = document.getElementById("skills-modal-git");
const skillsModalDart = document.getElementById("skills-modal-dart");
const skillsModalFlutter = document.getElementById("skills-modal-flutter");
const skillsModalReactNative = document.getElementById("skills-modal-reactNative");


//aboutme
const openModalPiano = document.getElementById("piano");
const openModalBooks = document.getElementById("books");
const openModalSports = document.getElementById("sports");

const closeModalPiano = document.getElementById("closePiano");
const closeModalBooks = document.getElementById("closeBooks");
const closeModalSports = document.getElementById("closeSports");

const aboutMeModalPiano = document.getElementById("aboutMe-modal-piano");
const aboutMeModalBooks = document.getElementById("aboutMe-modal-books");
const aboutMeModalSports = document.getElementById("aboutMe-modal-sports");

const overflow = document.getElementById("modalOverflow");


 // Reusable function for opening and closing of the modals
 
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

  // Example of use for the JavaScript
configureModal(openModalJavascript, closeModalJavascript, skillsModalJavaScript);

  // Example of use for the CSS
configureModal(openModalCss, closeModalCss, skillsModalCss);

// Example of use for the HTML
configureModal(openModalHtml, closeModalHtml, skillsModalHtml);

// Example of use for the React
configureModal(openModalReact, closeModalReact, skillsModalReact);

// Example of use for the Vue
configureModal(openModalVue, closeModalVue, skillsModalVue);

// Example of use for the Git
configureModal(openModalGit, closeModalGit, skillsModalGit);

// Example of use for the Dart
configureModal(openModalDart, closeModalDart, skillsModalDart);

// Example of use for the Flutter
configureModal(openModalFlutter, closeModalFlutter, skillsModalFlutter);

// Example of use for the React Native
configureModal(openModalReactNative, closeModalReactNative, skillsModalReactNative);

// Example of use for the Piano
configureModal(openModalPiano, closeModalPiano, aboutMeModalPiano);

// Example of use for the Books
configureModal(openModalBooks, closeModalBooks, aboutMeModalBooks);

// Example of use for the Sports
configureModal(openModalSports, closeModalSports, aboutMeModalSports);

  

/*=============== TRANSLATION THEME ===============*/

// let check=document.querySelector(".check");

// check.addEventListener("click", idioma);

// function idioma() {
//     let id=check.checked;
//     if(id==true) {
//         location.href="../../es.html"
//     }else {
//         location.href="../../index.html"
//     }
// }


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




/*=============== Nueva logica para cambio de idioma ===============*/

// Variable inicial con valor true
let valorVariable = true;

// Función para cambiar y mostrar el valor de la variable
function cambiarValorYMostrar() {
    // Cambiar el valor de la variable
    valorVariable = !valorVariable; // Si era true, ahora será false, y viceversa

    // Mostrar el valor de la variable en la consola
    console.log("Nuevo valor de la variable: " + valorVariable);

    // Cargar el contenido del JSON según el idioma seleccionado
    const langFile = valorVariable ? 'assets/json/textos_espanol.json' : 'assets/json/textos_ingles.json';
    fetch(langFile)
        .then(response => response.json())
        .then(data => {
            const Perfil = document.getElementById("Perfil");
            const Experiencia = document.getElementById("Experiencia");
            const NumeroDeProyectos = document.getElementById("NumeroDeProyectos");
            const NumeroDeClientes = document.getElementById("NumeroDeClientes");
            const iconBoton = document.createElement("i");
            const BotonCV = document.getElementById("BotonCV");
            const Proyectos = document.getElementById("Proyectos");
            const Habilidades = document.getElementById("Habilidades");
            const Yo = document.getElementById("Yo");
            const Proyecto1 = document.getElementById("Proyecto1");
            const Proyecto2 = document.getElementById("Proyecto2");
            const Proyecto3 = document.getElementById("Proyecto3");
            const Proyecto4 = document.getElementById("Proyecto4");
            const Proyecto5 = document.getElementById("Proyecto5");
            const Proyecto6News = document.getElementById("Proyecto6");
            const TituloMobile = document.getElementById("TituloMobile");
            const TituloFrontend = document.getElementById("TituloFrontend");
            const TituloTextoSobreMi = document.getElementById("TituloTextoSobreMi");
            const Piano = document.getElementById("Piano");
            const TextoSobremi = document.getElementById("TextoSobremi");
            const DeporteTexto = document.getElementById("DeporteTexto");
            const BotonDeContacto = document.getElementById("BotonDeContacto");
            const Lectura = document.getElementById("Lectura");
            const LecturaTexto1 = document.getElementById("LecturaTexto1");
            const LecturaTexto2 = document.getElementById("LecturaTexto2");
            const Deporte = document.getElementById("Deporte");
            const PianoTexto = document.getElementById("PianoTexto");
            const vivaldi = document.createElement("a");
            const chopin = document.createElement("a");
            const TextoFooter = document.getElementById("TextoFooter");
            Perfil.textContent = data.Perfil;
            Experiencia.textContent = data.Experiencia;
            NumeroDeProyectos.textContent = data.NumeroDeProyectos;
            NumeroDeClientes.textContent = data.NumeroDeClientes;
            iconBoton.classList.add("ri-download-line");
            BotonCV.textContent = "";
            BotonCV.appendChild(document.createTextNode(data.BotonCV));
            BotonCV.appendChild(iconBoton);
            Proyectos.textContent = data.Proyectos;
            Habilidades.textContent = data.Habilidades;
            Yo.textContent = data.Yo;
            Proyecto1.textContent = data.Proyecto1;
            Proyecto2.textContent = data.Proyecto2;
            Proyecto3.textContent = data.Proyecto3;
            Proyecto4.textContent = data.Proyecto4;
            Proyecto6News.textContent = data.Proyecto6;
            Proyecto5.textContent = data.Proyecto5;
            TituloFrontend.textContent = data.TituloFrontend;
            TituloMobile.textContent = data.TituloMobile;
            TituloTextoSobreMi.textContent = data.TituloTextoSobreMi;
            TextoSobremi.textContent = data.TextoSobremi;
            Piano.textContent = data.Piano;
            vivaldi.classList.add("referenciasPiano");
            vivaldi.textContent = "Vivaldi";
            chopin.classList.add("referenciasPiano");
            chopin.textContent = "Chopin";
            vivaldi.setAttribute("href", "https://www.youtube.com/watch?v=6El8B8hJ4Sg");
            vivaldi.setAttribute("target", "_blank");
            chopin.setAttribute("href", "https://www.youtube.com/watch?v=TbOZXL8Vz4w&t=847s");
            chopin.setAttribute("target", "_blank");
            PianoTexto.innerHTML = "";
            PianoTexto.appendChild(document.createTextNode(data.PianoTexto));
            PianoTexto.appendChild(vivaldi);
            PianoTexto.appendChild(document.createTextNode(" & "));
            PianoTexto.appendChild(chopin);
            PianoTexto.appendChild(document.createTextNode(data.PianoTexto2))
            Lectura.textContent = data.Lectura;
            LecturaTexto1.textContent = data.LecturaTexto1;
            LecturaTexto2.textContent = data.LecturaTexto2;
            Deporte.textContent = data.Deporte;
            DeporteTexto.textContent = data.DeporteTexto;
            BotonDeContacto.textContent = data.BotonDeContacto;
            TextoFooter.textContent = data.TextoFooter;
        })
        .catch(error => console.log(error));

    // Cambiar el contenido del botón según el valor de la variable
    const translationTheme = document.querySelector(".translation-theme");
    translationTheme.children[0].textContent = valorVariable ? "EN" : "EN";
    translationTheme.children[2].textContent = valorVariable ? "ES" : "ES";

    const elementsToUpdate = [
        Perfil,
        Experiencia,
        NumeroDeProyectos,
        NumeroDeClientes,
        BotonCV,
        Proyectos,
        Habilidades,
        Yo,
        TituloFrontend,
        TituloMobile,
        TextoSobremi,
        TituloTextoSobreMi,
        Deporte,
        Lectura,
        Piano,
    ];

    // Agregar la clase earthquake-animation a cada elemento
    elementsToUpdate.forEach((element) => {
        element.classList.add('earthquake-animation');
    });

    // Eliminar la clase earthquake-animation después de 2 segundos (2000 milisegundos)
    setTimeout(() => {
        elementsToUpdate.forEach((element) => {
            element.classList.remove('earthquake-animation');
        });
    }, 2000);



}

// Agregar un evento a la casilla de verificación para llamar a la función cuando se cambie el estado
const checkbox = document.querySelector(".check");
checkbox.addEventListener("change", cambiarValorYMostrar);

// Cargar el idioma inicial al cargar la página
cambiarValorYMostrar();