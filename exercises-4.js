// Exercises 4 - Total Digit Rekursif

function totalDigitRekursif(angka) {
  var numString = String(angka)
  var total = 0
  
  if (numString.length == 1)
    total= total + Number(numString)
  else 
    total = total + Number(numString[0]) + totalDigitRekursif(Number(numString.slice(1)))
    return total
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5