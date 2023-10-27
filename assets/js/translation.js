
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
        Yo,
        Perfil,
        Experiencia,
        NumeroDeProyectos,
        NumeroDeClientes,
        BotonCV,
        Proyectos,
        Habilidades,
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

