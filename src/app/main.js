const demo = document.getElementById("demo");

function calculate(type, num1, num2) {

  type = ["sum", "sus", "mul", "div"];

  switch (type) {
    case 0:
      type = num1 + num2;

      if (num2 == undefined) {
        num2 = 0;
      }
      break;
    case 1:
      type = num1 - num2;

      if (num2 == undefined) {
        num2 = 0;
      }
      break;
    case 2:
      type = num1 * num2;

      if (num2 == undefined) {
        num2 = 1;
      }
      break;
    case 3:
      type = num1 / num2;

      if (num2 == undefined) {
        num2 = 1;
      }
      break;
    default:
      type = "Indefinido.";
  }

  return type;
}

demo.innerHTML = calculate("sum");