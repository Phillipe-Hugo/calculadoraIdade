const diaInp = document.getElementById("IDdia");
const mesInp = document.getElementById("IDmes");
const anoInp = document.getElementById("IDano");

const diaEnt = document.getElementById("DD");
const mesEnt = document.getElementById("MM");
const anoEnt = document.getElementById("AA");

const form = document.querySelector("form");

const date = new Date();
let dia = date.getDate();
let mes = 1 + date.getMonth();
let ano = date.getFullYear();

const meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "Este é um campo obrigatório.";
      validator = false;
    } else if (mesInp.value > 12) {
        mesInp.style.borderColor = "red";
        mesInp.parentElement.querySelector("small").innerText = "Digite um Mês válido.";
        validator = false;
    } else if (diaInp.value > 31) {
      diaInp.style.borderColor = "red";
      diaInp.parentElement.querySelector("small").innerText =
          "Digite um Dia válido.";
        validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}
function handleSubmit(e) {
  e.preventDefault();

  if (validate()) {
    if (diaInp.value > dia) {
      dia = dia +  meses[mes - 1];
      mes = mes - 1;
    }
    if (mesInp.value > mes) {
      mes = mes + 12;
      ano = ano - 1;
    }

    const d = dia - diaInp.value;
    const m = mes - mesInp.value;
    const a = ano - anoInp.value;

    diaEnt.innerHTML = d;
    mesEnt.innerHTML = m;
    anoEnt.innerHTML = a;
  }
}

form.addEventListener("submit", handleSubmit);