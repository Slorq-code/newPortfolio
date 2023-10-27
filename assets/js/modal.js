
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

