// Exercises 7 - Melee Ranged Grouping

function meleeRangedGrouping (str) {

  var array = str.split(',')
  var arrSplit = []
  var arrMelee = []
  var arrRanged = []
  var hasil = []
  
  if (str == '') {
    return []
  }

  for (i = 0; i < array.length; i++) {
    arrSplit.push(array[i].split('-'))
  }
  for (j = 0; j < arrSplit.length; j++) {
    if (arrSplit[j][1] == 'Melee') {
      arrMelee.push(arrSplit[j][0])
    }
    else if (arrSplit[j][1] == 'Ranged') {
      arrRanged.push(arrSplit[j][0])
    }
  }

  hasil.push(arrRanged, arrMelee)
  return hasil
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []