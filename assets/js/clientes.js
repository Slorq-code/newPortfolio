const langFile = "https://raw.githubusercontent.com/Slorq-code/newPortfolio/master/assets/json/Clientes.json";
const fechaActual = new Date();
const mesActual = fechaActual.getMonth();
const diaActual = fechaActual.getDate(); // Obtén el día actual
const modalTentative = document.getElementById("modalTentative");
const numDiasMes = new Date(
  fechaActual.getFullYear(),
  mesActual + 1,
  0
).getDate();
const primerDiaMes = new Date(fechaActual.getFullYear(), mesActual, 1).getDay();
const calendario = document.getElementById("calendario");
const diasSemana = [
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
  "domingo",
];
const diasDelMes = [];

async function buscarNombreEnJSON(nombreBuscado) {
  return await fetch(langFile)
    .then((response) => response.json())
    .then((data) => {
      if (data.hasOwnProperty(nombreBuscado)) {
        const cliente = data[nombreBuscado];
        return cliente;
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.error("Error al cargar el archivo JSON:", error);
      return null; // Manejar errores
    });
}

// // test para probar la funcion
// buscarNombreEnJSON("Andres")

document
  .getElementById("consultar")
  .addEventListener("click", async function (e) {
    e.preventDefault(); // Evitar la recarga de la página
    const nombreBuscado = document.getElementById("nombreInput").value;
    const cliente = await buscarNombreEnJSON(nombreBuscado);
    if (cliente !== null) {
      modalTentative.classList.remove("hidden");
      const tentativa = cliente.tentativa;
      const clienteTitle = document.getElementById("clienteTitle")
      const statusText = document.getElementById("status")
      const fechaTentativa = document.getElementById("fechaTentativa")
      const cronograma = document.getElementById("cronograma")
      clienteTitle.textContent = "Hola " + nombreBuscado +" "+ cliente.apellido + "!";
      statusText.textContent = cliente.status;
      fechaTentativa.textContent = cliente.tentativaCompleta
      cronograma.textContent = cliente.cronograma



      // Agregar días vacíos al principio del calendario
      for (let i = 0; i < primerDiaMes; i++) {
        diasDelMes.push({ dia: "", diaDeLaSemana: "" });
      }
      // Agregar días del mes
      for (let dia = 1; dia <= numDiasMes; dia++) {
        const diaDeLaSemana = diasSemana[(primerDiaMes + dia - 2) % 7];
        const esDiaActual = dia === diaActual; // Verifica si es el día actual
        diasDelMes.push({
          dia,
          diaActual,
          diaDeLaSemana,
          esDiaActual,
          tentativa,
        });
      }
      // Completar la última semana con días vacíos si es necesario
      while (diasDelMes.length % 7 !== 0) {
        diasDelMes.push({ dia: "", diaDeLaSemana: "" });
      }
  
      diasDelMes.forEach((diaInfo) => {
        const diaElemento = document.createElement("div");
        diaElemento.textContent = `${diaInfo.dia} ${diaInfo.diaDeLaSemana}`;
  
        if (diaInfo.dia === "") {
          diaElemento.classList.add("dia-vacio");
        }
        if (diaInfo.diaActual < diaInfo.dia && diaInfo.dia < tentativa) {
          diaElemento.classList.add("diaMedio");
        }
        if (diaInfo.dia === tentativa) {
          diaElemento.classList.add("diaTentativa");
        }
        if (diaInfo.esDiaActual) {
          diaElemento.classList.add("diaActual");
        }
        calendario.appendChild(diaElemento);
      }
      );
    } else {
      console.log(`No se encontró a '${nombreBuscado}' en el archivo JSON.`);
    }
  });
