function validateInput() {
  var side1 = document.getElementById("side1").value;
  var side2 = document.getElementById("side2").value;
  var side3 = document.getElementById("side3").value;
  const allSides = [side1, side2, side3];
  let isValid = true;
  allSides.forEach((currentSide) => {
    if (currentSide === "") {
      isValid = false;
    }
    if (currentSide >= 0 && currentSide <= 999999.999999) {
    } else {
      isValid = false;
    }
  });
  document.getElementById("enterBtn").disabled = isValid ? false : true;
  return isValid;
}

function classification(side1, side2, side3) {
  try {
    const con1 = side1 * side1 === side2 * side2 + side3 * side3;
    const con2 = side2 * side2 === side1 * side1 + side3 * side3;
    const con3 = side3 * side3 === side1 * side1 + side2 * side2;
    if (side1 == side2 && side1 == side3) return "Equilateral triangle";
    else if (side1 == side2 || side2 == side3 || side3 == side1)
      return "Isosceles triangle";
    else if (con1 || con2 || con3) return "Right triangle";
    else return "Scalene triangle";
  } catch (error) {
    return "ERROR";
  }
}

function render() {
  var side1 = document.getElementById("side1").value;
  var side2 = document.getElementById("side2").value;
  var side3 = document.getElementById("side3").value;
  if (validateInput()) {
    // enable เมื่อ isValid มีค่าเป็น true
    const result = classification(side1, side2, side3);
    document.getElementById("result").innerHTML = result;
  } else {
    // ปุ่ม “Enter” ที่ disabled เมื่อ isValid มีค่าเป็น false
    document.getElementById("enterBtn").disabled = true;
  }
}
