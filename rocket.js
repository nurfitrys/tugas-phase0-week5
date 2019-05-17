/*
  ==================================
  GROUP RACERS COUNTRY
  ==================================

  [INSTRUCTION]
  Terdapat function groupRacersCountry yang akan menerima 1 parameter berupa array of object dengan isi tiap elemen berupa data kemenangan tiap sirkuit. Function ini akan mengelompokkan input berdasarkan country kelahiran masing -masing racers dengan detail seperti pada contoh dibawah ini.

  [EXAMPLE]
  --- input ---
  [
    {
      circuit: 'Sentul',
      location: 'Indonesia',
      winner: {
        firstName: 'Mario',
        lastName: 'Bross',
        country: 'Italy'
      }
    },
    {
      circuit: 'Malaya',
      location: 'Peru',
      winner: {
        firstName: 'Mark',
        lastName: 'Marques',
        country: 'Spain'
      }
    }
  ]

  --- output --- 
  {
    Italy: {
      winningCircuits: [
        { 
          name: 'Mario Bross',
          winLocation: 'Sentul, Indonesia'
        }
      ],
      totalWin: 1
    },
    Spain: {
      winningCircuits: [
        {
          name: 'Mark Marques',
          winLocation: 'Malaya, Peru'
        }
      ],
      totalWin: 1
    }
  }

  [RULES]
  - dilarang menggunakan for in
  - dilarang menggunakan map, filter, reduce


*/


function groupRacersCountry(arr) {
  //your code here
  var obj = {}
  for (i = 0; i < arr.length; i++) {
    var name = arr[i].winner.firstName + ' ' + arr[i].winner.lastName
    if(obj[arr[i].winner.country] == undefined) {
      obj[arr[i].winner.country] = {
        winningCircuit: [],
        totalWin: 1
      }
      obj[arr[i].winner.country].winningCircuit.push({
        'name' : name, 'winLocation' : arr[i].circuit + ', ' + arr[i].location
      })
    }
    else {
      obj[arr[i].winner.country].winningCircuit.push({
        'name' : name, 'winLocation' : arr[i].circuit + ', ' + arr[i].location
      })
      obj[arr[i].winner.country].totalWin++
    }
  }
  return (JSON.stringify((obj), null, 2))
}

var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  }
]
console.log(groupRacersCountry(motoGP));
/*
{
  Italy: {
    winningCircuits: [
      { name: 'Andrea Dovizioso', winLocation: 'Losail, Qatar' },
      { name: 'Valentino Rossi', winLocation: 'De Jerez, Spain' } ,
      { name: 'Andrea Dovizioso', winLocation: 'Mugello, Italy' }
    ],
    totalWin: 3
  },
  UK: {
    winningCircuits: [
      { name: 'Cal Crutchlow', winLocation: 'Autodromo, Argentine' }
    ],
    totalWin: 1
  }
}
*/

var motoGP2 = [
  {
    circuit: 'Sentul',
    location: 'Indonesia',
    winner: {
      firstName: 'Mario',
      lastName: 'Bross',
      country: 'Italy'
    }
  },
  {
    circuit: 'Malaya',
    location: 'Peru',
    winner: {
      firstName: 'Mark',
      lastName: 'Marques',
      country: 'Spain'
    }
  }
]

console.log(groupRacersCountry(motoGP2));
/*
{
    Italy: {
      winningCircuits: [
        {
          name: 'Mario Bross',
          winLocation: 'Sentul, Indonesia'
        }
      ],
      totalWin: 1
    },
    Spain: {
      winningCircuits: [
        {
          name: 'Mark Marques',
          winLocation: 'Malaya, Peru'
        }
      ],
      totalWin: 1
    }
  }
*/