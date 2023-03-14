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