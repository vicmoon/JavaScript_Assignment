function calculateDiagonale() {
  const number = window.prompt("Enter a number");
  let diagonale = Math.round(Math.sqrt(number));
  alert(`The square diagonale is ${diagonale}`);
  console.log(`The square diagonale is ${diagonale}`);
}

calculateDiagonale();

function calculateArea() {
  const a = window.prompt("Enter a number");
  const b = window.prompt("Enter another number");
  const c = window.prompt("Enter one more number");
  let semiPerim = (a + b + c) / 2;
  let area = Math.round(
    Math.sqrt(semiPerim * (semiPerim - a) * (semiPerim - b) * (semiPerim - c))
  );
  console.log(semiPerim);
  alert(`The area of the triangle is ${area}`);
}

calculateArea();

function calculateCircumferenceAndSurface() {
  const radius = window.prompt("Enter a number");
  let circumferance = Math.round(2 * Math.PI * radius);
  let surfaceArea = Math.round(Math.PI * radius * radius);
  console.log(circumferance);
  alert(
    `The  circumferance of the circle is ${circumferance} and the surface area is ${surfaceArea}`
  );
}
calculateCircumferenceAndSurface();

function integers() {
  let number = prompt("Enter a number please");
  let anotherNumber = prompt("Enter another number");

  if (number > anotherNumber) {
    alert(`${number} is the largest`);
  }
  if (number < anotherNumber) {
    alert(`${anotherNumber} is the lagest`);
  }
}

integers();

function evenOrodd() {
  let number = prompt("Enter a number please");
  if (number % 2 == 0) {
    alert("Even!");
  } else {
    alert("That's an odd number");
  }
}

evenOrodd();
