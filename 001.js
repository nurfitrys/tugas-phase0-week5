
/*
======================
Highest Global Minimum
======================
Name :_____________
[INSTRUCTIONS]
highestGlobalMinimum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka minimum yang paling besar.
[RULE]
- WAJIB menuliskan PSEUDOCODE. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while dan if-else untuk pemecahan masalah.
- Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.
- Penggunaan sintaks .sort() array tidak diperbolehkan.
[]
[EXAMPLE]
highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])
firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]
nilai minimum dari firstArr = 1
nilai minimum dari secondArr = 8
karena 1 < 8, maka function highestGlobalMinimum akan me-return 8.

PSEUDOCODE :

MAKE a FUNCTION named highestGlobalMinumum with two parameters is firstArr and secondArr

READ AND STORE tempFirstArr with 0
READ AND STORE tempSecondArr with 0

MAKE a LOOPING var i with START in 0 and FINISH in firstArr length -1 with INCREMENT 1
MAKE a CONDITION
  IF i equals to 0, tempFirstArr = firstArr i
  ELSE IF firstArr i less than tempFirstArr, tempFirstArr = firstArr i

MAKE A LOOPING var j with start in 0 and finish in secondArr length - 1 with INCREMENT 1
MAKE a CONDITION
  IF j equals to 0, tempSecond Arr = secondArr j
  ELSE IF secondArr j less than tempSecondArr, tempSecondArr = secondArr j

MAKE A CONDITION
IF TempFirstArr more than tempSecondArr, return tempFirstArr
ELSE return tempSecondArr

*/

function highestGlobalMinimum(firstArr, secondArr) {
  var tempFirstArr = 0
  var tempSecondArr = 0
    
  for (i = 0; i <= firstArr.length-1; i++){
    if (i == 0){
      tempFirstArr = firstArr[i];
    }
    else if(firstArr[i] < tempFirstArr) {
      tempFirstArr = firstArr[i]
    }
  }
    
  for (j = 0; j <= secondArr.length-1; j++){
    if (j == 0) {
      tempSecondArr = secondArr[j]
    }
    else if (secondArr[j] < tempSecondArr) {
      tempSecondArr = secondArr[j]
    }
  }
    
  if (tempFirstArr > tempSecondArr) {
    return tempFirstArr
  }
  else {
    return tempSecondArr
  }  
}

console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5