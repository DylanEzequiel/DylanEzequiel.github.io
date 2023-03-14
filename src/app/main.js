const demo = document.getElementById("demo");

function calculate(type, num1, num2) {

  switch (type) {
    case "sum":
      if (num2 == undefined) {
        num2 = 0;
      }

      return num1 + num2;
    case "sus":
      if (num2 == undefined) {
        num2 = 0;
      }

      return num1 - num2;
    case "mul":
      if (num2 == undefined) {
        num2 = 1;
      }

      return num1 * num2;
    case "div":
      if (num2 == undefined) {
        num2 = 1;
      }

      return num1 / num2;
    default:
      return Math.floor(Math.random() * 42) + 1;
  }
}

const button = document.getElementById("executer");

button.onclick = () => {

  demo.innerHTML = calculate();
}

function selectColor() {
  const COLORS = {
    PRIMARY: [
      "#F00", "#0F0", "#00F"
    ],

    SECONDARY: [
      "#FF0", "#F0F", "#0FF"
    ]
  };

  let input = prompt("Introduce un color");

  switch (true) {
    case (/rojo/i).test(input):
      demo.innerHTML = COLORS.PRIMARY[0];
      demo.style.color = "#F00";
      break;
    case (/verde/i).test(input):
      demo.innerHTML = COLORS.PRIMARY[1];
      demo.style.color = "#0F0";
      break;
    case (/azul/i).test(input):
      demo.innerHTML = COLORS.PRIMARY[2];
      demo.style.color = "#00F";
      break;
    case (/amarillo/i).test(input):
      demo.innerHTML = COLORS.SECONDARY[0];
      demo.style.color = "#FF0";
      break;
    case (/rosa/i).test(input):
      demo.innerHTML = COLORS.SECONDARY[1];
      demo.style.color = "#F0F";
      break;
    case (/celeste/i).test(input):
      demo.innerHTML = COLORS.SECONDARY[2];
      demo.style.color = "#0FF";
      break;
    default:
      demo.innerHTML = "¡Este color no está en la lista!";
  }
}
