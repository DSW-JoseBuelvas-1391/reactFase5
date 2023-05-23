function procesarRespuestas() {
    let total = 5;
    let puntos = 0;
    let myForm = document.forms["formulario"];
    let respuestasCorrectas = ["c", "a", "b","a","c"];
    for (let i = 1; i <= total; i++) {
      // Se debe utilizar la comparación estricta (triple igual) en lugar de la comparación débil (doble igual).
      if (myForm["r" + i].value === null || myForm["r" + i].value === "") {
        alert("Favor responder todas las preguntas");
        return false;
      } else {
        // Se debe utilizar el operador de concatenación (+) para construir el nombre de la variable.
        if (myForm["r" + i].value === respuestasCorrectas[i - 1]) {
          puntos++;
        }
      }
    }
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Obtuviste " + puntos + " puntos de " + total + " posibles";
    return false;
  }
  