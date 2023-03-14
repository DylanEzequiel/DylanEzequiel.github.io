const demo = document.getElementById("demo");

function calculate(type, num1, num2) {

  type = ["sum", "sus", "mul", "div"];

  switch (type) {
    case 0:
      if (num2 == undefined) {
        num2 = 0;
      }

      return num1 + num2;
    case 1:
      if (num2 == undefined) {
        num2 = 0;
      }

      return num1 - num2;
    case 2:
      if (num2 == undefined) {
        num2 = 1;
      }

      return num1 * num2;
    case 3:
      if (num2 == undefined) {
        num2 = 1;
      }

      return num1 / num2;
    default:
      type = "Indefinido.";
  }

  return type;
}

const button = document.getElementById("executer");

button.onclick = () => {

  demo.innerHTML = calculate("sum", 9, 8);
}