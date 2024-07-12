/* 
1. Bir dizideki kelimeleri alfabetik sıraya göre sıralamak için sort metodunu kullanın.

Örnek Dizi: ['orange', 'apple', 'banana', 'kiwi', 'grape']

2. Bir dizideki sayıları azalan sıraya göre sıralamak için sort metodunu kullanın.

Örnek Dizi: [15, 3, 9, 6, 2, 20, 7]
*/

// Ödev -1
const meyveler = ['orange', 'apple', 'banana', 'kiwi', 'grape'];
meyveler.sort();
console.log(meyveler);

// Ödev -2
const sayilar = [ 15, 3, 9, 6, 2, 20, 7 ];
sayilar.sort(function(a,b){return b-a});

console.log(sayilar);