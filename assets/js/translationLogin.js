
/*=============== Nueva logica para cambio de idioma ===============*/

// Variable inicial con valor true
let valorVariable = true;

// Función para cambiar y mostrar el valor de la variable
function cambiarValorYMostrar() {
    // Cambiar el valor de la variable
    valorVariable = !valorVariable; // Si era true, ahora será false, y viceversa
    const LoginText = document.getElementById("loginText");

    // Cargar el contenido del JSON según el idioma seleccionado
    const langFile = valorVariable ? 'assets/json/textos_espanol.json' : 'assets/json/textos_ingles.json';
    fetch(langFile)
        .then(response => response.json())
        .then(data => {
            LoginText.textContent = data.TextoLoginPage;
        })
        .catch(error => console.log(error));

    // Cambiar el contenido del botón según el valor de la variable
    const translationTheme = document.querySelector(".translation-theme");
    translationTheme.children[0].textContent = valorVariable ? "Es" : "En";
    translationTheme.children[2].textContent = valorVariable ? "Es" : "Es";

    const elementsToUpdate = [
        LoginText
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

