function pow(num, degree) {
  if (degree === 0) {
    return 1;
  } else {
    return num * pow(num, degree - 1);
  }
}

let num = parseInt(prompt("Введіть число:"));
let degree = parseInt(prompt("Введіть ступінь:"));

let result = pow(num, degree);
alert(`Результат: ${result}`);