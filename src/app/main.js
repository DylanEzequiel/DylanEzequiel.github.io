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
  
  switch (input) {
    case /rojo/i:
      demo.innerHTML = COLORS.PRIMARY[0];
      break;
    case /verde/i:
      demo.innerHTML = COLORS.PRIMARY[1];
      break;
    case /azul/i:
      demo.innerHTML = COLORS.PRIMARY[2];
      break;
    case /amarillo/i:
      demo.innerHTML = COLORS.SECONDARY[0];
      break;
    case /rosa/i:
      demo.innerHTML = COLORS.SECONDARY[1];
      break;
    case /celeste/i:
      demo.innerHTML = COLORS.SECONDARY[2];
      break;
    default:
      demo.innerHTML = "¡Este color no está en la lista!";
  }
}
