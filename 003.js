/*
    =============
    Shopping Ads 
    =============

    Saat sedang asik membuka website. user tertarik untuk memencet iklan,
    kemudian membeli barang di toko online favouritenya.
    
    [INSTRUCTION]
    Buatlah system ads untuk Website dimana user memilih belanjaan dari 
    var products dengan cara menawarkan berdasarkan referensi yang user 
    paling sering jelajahi.

    [EXAMPLE]
    jika user memiliki catatan akun seperti:
    {
      username: 'Naruto',
      favourite: ['indomie', 'mie sedap'],
      saldo: 10000 
    }
    , maka User akan mendapat tawaran 
    - indomie seharga 3000
    - mie sedap seharga 2300

    contoh outputnya adalah : 
    {
        title:"Ads"
        ads:[
             {
                id:1,
                name:"indomie",
                price:3000
            },
            {
                id:2,
                name:"mie sedap"
                price:2300
            }
        ]
    }

    **hanya tampilkan favourite yang harganya
    lebih rendah atau sama dengan saldo user**

    jika user tidak memiliki favourite
    , maka User akan mendapat tawaran yang bisa dibeli oleh saldonya

    jika user tidak memiliki catatan akun/tidak memiliki saldo
    , maka User akan mendapat semua tawaran

    jika user memiliki saldo yang kurang dari semua barang favouritenya
    , maka tampilkan semua barang yang bisa dibeli user tersebut

    [NOTE]
    - product di dalam ads dibuat berurutan sesuai favourite user
    , bila tidak berurutan akan dikurang 10% poin;

    [RULE]
    - Dilarang menggunakan built in function array apapun kecuali push() 
    - Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
    - Dilarang menggunakan regex .match dan lainnya!
    - Dilarang menggunakan built in function .indexOf() dan .include()

*/
var products = [
  {
      id:0,
      name:"micin",
      price:100
  },
  {
      id:1,
      name:"indomie",
      price:3000
  },
  {
      id:2,
      name:"mie sedap",
      price:2300
  },
  {
      id:3,
      name:"sari mie",
      price:2000
  }, 
  {
      id:4,
      name:"mie apa",
      price:1000
  }
]

// function ads(userInfo) {
//   // your code here
//   var products = [
//   {
//       id:0,
//       name:"micin",
//       price:100
//   },
//   {
//       id:1,
//       name:"indomie",
//       price:3000
//   },
//   {
//       id:2,
//       name:"mie sedap",
//       price:2300
//   },
//   {
//       id:3,
//       name:"sari mie",
//       price:2000
//   }, 
//   {
//       id:4,
//       name:"mie apa",
//       price:1000
//   }
// ]
// var array = []
// for (i=0; i<products.length; i++) {

//   for (j=0; j<ads.length; j++) {
//     if (ads.favourite == products[i].name) {
//       array.push(products[i])
//   }
// }

// var object = {}
// object.title = 'Ads'
// object.ads = array
// } 


// if (ads.favourite == 0) {
//   object.ads += (products.price < ads.saldo)
// }
// else if (ads.favorite == undefined && ads.saldo == undefined || ads.saldo == undefined) {
//   object += products
// }
// else if (ads.saldo < product.price) {
//   object += (product <= ads.saldo)
// }
// return object
// }

function ads(userInfo) {
  if(userInfo.username == undefined ){
    return {
                title : "ads",
                ads : [{
                    id:0,
                    name:"micin",
                    price:100
                },
                {
                    id:1,
                    name:"indomie",
                    price:3000
                },
                {
                    id:2,
                    name:"mie sedap",
                    price:2300
                },
                {
                    id:3,
                    name:"sari mie",
                    price:2000
                },
                {
                    id:4,
                    name:"mie apa",
                    price:1000
                }]
            }
  }

  var hasil = {
    title : "ads",
    ads : []
  }

  for (i = 0; i < userInfo.favourite.length; i++){
    var bayar =  userInfo.saldo
      for(j = 0; j < products.length; j++ ){
        if(userInfo.favourite[i] == products[j].name  ){
          if(products[j].price <= userInfo.saldo){
            hasil.ads.push({
              id : products[j].id,
              name : products[j].name,
              price : products[j].price
            })
          }
        }    
      }
  }

  var hasil2 = {
    title : "ads",
    ads : []
  }

  if (hasil.ads.length == 0 && userInfo.saldo > 0) {
    for (x = 0; x < products.length; x++) {
      if (products[x].price <= userInfo.saldo) {
        hasil2.ads.push({
          id : products[x].id,
          name : products[x].name,
          price : products[x].price
        })
      }
    }
    return hasil2
  }
  else if (hasil.ads.length == 0 && userInfo.saldo == 0) {
    return {
      title : "ads",
      ads : [{
            id:0,
            name:"micin",
            price:100
        },
        {
            id:1,
            name:"indomie",
            price:3000
        },
        {
            id:2,
            name:"mie sedap",
            price:2300
        },
        {
            id:3,
            name:"sari mie",
            price:2000
        },
        {
            id:4,
            name:"mie apa",
            price:1000
      }]
    }
  }
  return hasil
}


console.log( ads({
  username: 'Naruto',
  favourite: ['indomie', 'mie sedap'],
  saldo: 10000 
}) )
/* 
    {
        title:"Ads"
        ads:[
             {
                id:1,
                name:"indomie",
                price:3000
            },
            {
                id:2,
                name:"mie sedap"
                price:2300
            }
        ]
    }
*/

console.log( ads({
  username: 'Hinata',
  favourite: ['mie sedap', 'indomie'],
  saldo: 10000 
}) )
/* 
    {
        title:"Ads"
        ads:[
            {
                id:2,
                name:"mie sedap"
                price:2300
            },
            {
                id:1,
                name:"indomie",
                price:3000
            }
        ]
    }
*/

console.log( ads({
  username: 'Gara',
  favourite: ['indomie', 'sari mie'],
  saldo: 2000 
}) )
/* 
    {
        title:"Ads"
        ads:[
            {
                id:3,
                name:"sari mie"
                price:2000
            }
        ]
    }
*/

console.log( ads({
  username: 'Kakashi',
  favourite: ['indomie'],
  saldo: 2000 
}) )
/* 
    {
        title:"Ads"
        ads:[
             {
                id:0,
                name:"micin",
                price:100
            },
            {
                id:3,
                name:"sari mie"
                price:2000
            },
            {
                id:4,
                name:"mie apa"
                price:1000
            }
        ]
    }
*/

console.log(ads({
  username: 'Sakura',
  favourite: [],
  saldo: 2000
}))
/* 
    {
        title:"Ads"
        ads:[
             {
                id:0,
                name:"micin",
                price:100
            },
            {
                id:3,
                name:"sari mie"
                price:2000
            },
            {
                id:4,
                name:"mie apa"
                price:1000
            }
        ]
    }
*/

console.log(ads({
  username: 'Sasuke',
  favourite: ['micin'],
  saldo: 0
}))
/*
    {
        title:"Ads"
        ads:[
            {
                id:0,
                name:"micin",
                price:100
            },
            {
                id:1,
                name:"indomie",
                price:3000
            },
            {
                id:2,
                name:"mie sedap"
                price:2300
            },
            {
                id:3,
                name:"sari mie"
                price:2000
            },
            {
                id:4,
                name:"mie apa"
                price:1000
            }
        ]
    }
*/

console.log(ads({}))
/*
    {
        title:"Ads"
        ads:[
            {
                id:0,
                name:"micin",
                price:100
            },
            {
                id:1,
                name:"indomie",
                price:3000
            },
            {
                id:2,
                name:"mie sedap"
                price:2300
            },
            {
                id:3,
                name:"sari mie"
                price:2000
            },
            {
                id:4,
                name:"mie apa"
                price:1000
            }
        ]
    }
*/