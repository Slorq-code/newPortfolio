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
const openModalEnglish = document.getElementById("english");
const openModalEspañol = document.getElementById("español");
const openModalCompañerismo = document.getElementById("Compañerismo");
const openModalPerseveracia = document.getElementById("Perseverancia");
const openModalCuriosidad = document.getElementById("Curiosidad");
const openModalValentia = document.getElementById("Temerario");

const closeModalJavascript = document.getElementById("closeJavascript");
const closeModalCss = document.getElementById("closeCss");
const closeModalHtml = document.getElementById("closeHtml");
const closeModalReact = document.getElementById("closeReact");
const closeModalVue = document.getElementById("closeVue");
const closeModalGit = document.getElementById("closeGit");
const closeModalDart = document.getElementById("closeDart");
const closeModalFlutter = document.getElementById("closeFlutter");
const closeModalReactNative = document.getElementById("closeReactNative");
const closeModalEnglish = document.getElementById("closeEnglish");
const closeModalEspañol = document.getElementById("closeEspañol");
const closeModalPerseverancia = document.getElementById("closeCompañerismo");
const closeModalCompañerismo = document.getElementById("closePerseverancia");
const closeModalCuriosidad = document.getElementById("closeCuriosidad");
const closeModalTemerario = document.getElementById("closeDareDevil");

const skillsModalJavaScript = document.getElementById("skills-modal-javascript");
const skillsModalCss = document.getElementById("skills-modal-css");
const skillsModalHtml = document.getElementById("skills-modal-html");
const skillsModalReact = document.getElementById("skills-modal-react");
const skillsModalVue = document.getElementById("skills-modal-vue");
const skillsModalGit = document.getElementById("skills-modal-git");
const skillsModalDart = document.getElementById("skills-modal-dart");
const skillsModalFlutter = document.getElementById("skills-modal-flutter");
const skillsModalReactNative = document.getElementById("skills-modal-reactNative");
const skillsModalEnglish = document.getElementById("skills-modal-English");
const skillsModalEspañol = document.getElementById("skills-modal-Español");
const skillsModalPerseverancia = document.getElementById("skills-modal-compañerismo");
const skillsModalCompañerismo = document.getElementById("skills-modal-Perseverancia");
const skillsModalCuriosidad = document.getElementById("skills-modal-curiosidad");
const skillsModalTemerario = document.getElementById("skills-modal-daredevil");


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
  if (
    openButton && 
    closeButton && 
    modal
  ) {
    openButton.addEventListener("click", function () {
      modal.classList.add("show");
      document.documentElement.scrollTop = 0;
      overflow.classList.add("overFlowHidden");
    });

    closeButton.addEventListener("click", function () {
      modal.classList.remove("show");
      overflow.classList.remove("overFlowHidden");
      document.documentElement.scrollTop = 1000;
    });
  } 
}

configureModal(openModalJavascript, closeModalJavascript, skillsModalJavaScript);
configureModal(openModalCss, closeModalCss, skillsModalCss);
configureModal(openModalHtml, closeModalHtml, skillsModalHtml);
configureModal(openModalReact, closeModalReact, skillsModalReact);
configureModal(openModalVue, closeModalVue, skillsModalVue);
configureModal(openModalGit, closeModalGit, skillsModalGit);
configureModal(openModalDart, closeModalDart, skillsModalDart);
configureModal(openModalFlutter, closeModalFlutter, skillsModalFlutter);
configureModal(openModalReactNative, closeModalReactNative, skillsModalReactNative);
configureModal(openModalEnglish, closeModalEnglish, skillsModalEnglish);
configureModal(openModalEspañol, closeModalEspañol, skillsModalEspañol);

configureModal(openModalCompañerismo, closeModalPerseverancia, skillsModalPerseverancia);
configureModal(openModalPerseveracia, closeModalCompañerismo, skillsModalCompañerismo);
configureModal(openModalCuriosidad, closeModalCuriosidad, skillsModalCuriosidad);
configureModal(openModalValentia, closeModalTemerario, skillsModalTemerario);


configureModal(openModalPiano, closeModalPiano, aboutMeModalPiano);
configureModal(openModalBooks, closeModalBooks, aboutMeModalBooks);
configureModal(openModalSports, closeModalSports, aboutMeModalSports);


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




/*=============== Nueva logica para cambio de idioma ===============*/

// Variable inicial con valor true
let valorVariable = true;

// Función para cambiar y mostrar el valor de la variable
function cambiarValorYMostrar() {
    // Cambiar el valor de la variable
    valorVariable = !valorVariable; // Si era true, ahora será false, y viceversa

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
            const TituloLenguas = document.getElementById("TituloLenguas");
            const TituloHabilidadesBlandas = document.getElementById("TituloHabilidadesBlandas");
            const BotonDeContacto = document.getElementById("BotonDeContacto");
            const Lectura = document.getElementById("Lectura");
            const LecturaTexto1 = document.getElementById("LecturaTexto1");
            const LecturaTexto2 = document.getElementById("LecturaTexto2");
            const Deporte = document.getElementById("Deporte");
            const PianoTexto = document.getElementById("PianoTexto");
            const vivaldi = document.createElement("a");
            const chopin = document.createElement("a");
            const TextoFooter = document.getElementById("TextoFooter");
            const SpamEspañol = document.getElementById("SpamEspañol");
            const TextPerseverancia = document.getElementById("TextPerseverancia");
            const TextCompañerismo = document.getElementById("TextCompañerismo");
            const TextCuriosidad = document.getElementById("TextCuriosidad");
            const TextTemerario = document.getElementById("TextTemerario");
            const TextEspañol = document.getElementById("TextEspañol");
            const TextIngles = document.getElementById("TextIngles");
            const AccesButton1= document.getElementById("accesButton1");
            const AccesButton2 = document.getElementById("accesButton2");
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
            TituloLenguas.textContent = data.TituloLenguas;
            TituloHabilidadesBlandas.textContent = data.TituloHabilidadesBlandas;
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

          //  DeporteTexto.textContent = data.DeporteTexto;

            BotonDeContacto.textContent = data.BotonDeContacto;
            TextoFooter.textContent = data.TextoFooter;
            SpamEspañol.textContent = data.SpamEspañol;
            TextPerseverancia.textContent = data.TextPerseverancia;
            TextCompañerismo.textContent = data.TextCompañerismo;
            TextCuriosidad.textContent = data.TextCuriosidad;
            TextTemerario.textContent = data.TextTemerario;
            TextEspañol.textContent = data.Español;
            TextIngles.textContent = data.Ingles;
            AccesButton1.textContent = data.AccesoClientes;
            AccesButton2.textContent = data.AccesoClientes;
        })
        .catch(error => console.log(error));

    // Cambiar el contenido del botón según el valor de la variable
    const translationTheme = document.querySelector(".translation-theme");
    translationTheme.children[0].textContent = valorVariable ? "Es" : "En";
    translationTheme.children[2].textContent = valorVariable ? "Es" : "Es";

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
        TituloLenguas,
        TituloHabilidadesBlandas,
        TextoSobremi,
        TituloTextoSobreMi,
        Deporte,
        Lectura,
        Piano,
        BotonDeContacto,
        TextoFooter,
        TextCuriosidad,
        TextPerseverancia,
        TextCompañerismo,
        TextTemerario,
        TextIngles,
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
    }, 1000);

}

// Agregar un evento a la casilla de verificación para llamar a la función cuando se cambie el estado
const checkbox = document.querySelector(".check");
checkbox.addEventListener("change", cambiarValorYMostrar);

// Cargar el idioma inicial al cargar la página
cambiarValorYMostrar();



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
  origin: 'top',
  distance: '60px',
  duration: 2600,
  delay: 400,
})

sr.reveal(`.profile__border`, {delay: 2000})
sr.reveal(`.profile__name`, {delay: 3600})
sr.reveal(`.profile__profile`, {delay: 3650})
sr.reveal(`.profile__profession`, {delay: 3700})
sr.reveal(`.profile__social`, {delay: 3800})
sr.reveal(`.profile__info-group`, {interval: 400, delay: 3900})
sr.reveal(`.profile__buttons`, {delay: 4000})
sr.reveal(`.floatButtonMobileContainer`, {delay: 4100})
sr.reveal(`.filters__content`, {delay: 4200})
sr.reveal(`.filters`, {delay: 5000})
sr.reveal(`.floatButtonContainer`, {delay: 5500})

