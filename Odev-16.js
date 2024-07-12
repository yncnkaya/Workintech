/* 
1. Bir dizideki elemanların frekansını bulmak için reduce metodunu kullanın.

Örnek Dizi: ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']

const dizi = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];

const frekans = dizi.reduce((acc, item) => {
    if (acc[item]) {
        acc[item]++;
    } else {
        acc[item] = 1;
    }
    return acc;

2. Bir dizideki belirli bir kelimenin kaç kez geçtiğini bulmak için reduce metodunu kullanın.

Örnek Dizi: ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'] (Belirli Kelime: 'apple')

const dizi = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
const kelime = 'apple';

const sayac = dizi.reduce((acc, item) => {
  if (item === kelime) {
    acc++;
  }
  return acc;
}, 0);
*/