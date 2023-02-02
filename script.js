function calculateDiagonale() {
  let a = 9;
  let diagonale = Math.sqrt(a);
  alert(`The square diagonale is ${diagonale}`);
  console.log(`The square diagonale is ${diagonale}`);
}

calculateDiagonale();

function calculateArea() {
  let a = 5;
  let b = 6;
  let c = 7;
  let semiPerim = (a + b + c) / 2;
  let area = Math.sqrt(
    semiPerim * (semiPerim - a) * (semiPerim - b) * (semiPerim - c)
  );
  console.log(semiPerim);
  alert(`The area of the triangle is ${area}`);
}

calculateArea();

function calculateCircumferenceAndSurface() {
  let radius = 4;
  let circumferance = 2 * Math.PI * radius;
  let surfaceArea = Math.PI * radius * radius;
  console.log(circumferance);
  alert(
    `The  circumferance of the circle is ${circumferance} and the surface area is ${surfaceArea}`
  );
}
calculateCircumferenceAndSurface();
