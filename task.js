/**
 * setTimeout
 * 
 * Buatlah sebuah fungsi yang menampilkan pesan "Latihan dimulai dalam 5 detik" dan setelah menunggu selama 5 detik, menampilkan pesan "Mulai!".
 * 
 */

mulaiHitungMundur();
// Latihan dimulai dalam 5 detik...
// Mulai!


/**
 * setInterval
 * 
 * Buatlah sebuah fungsi yang akan menampilkan pesan "Detik ke-{n}" setiap detik. 
 * Fungsi ini harus berhenti menampilkan pesan setelah mencapai "Detik ke-5".
 * 
 */

tampilkanDetik()
// "Detik ke-1"
// (setelah 1 detik) "Detik ke-2"
// (setelah 1 detik lagi) "Detik ke-3"
// (setelah 1 detik lagi) "Detik ke-4"
// (setelah 1 detik lagi) "Detik ke-5"


/**
 * Cek Lari (Gabungan setTimeout dan setInterval)
 * 
 * Buatlah sebuah fungsi yang ketika dijalankan akan menunggu selama 2 detik, kemudian menampilkan pesan "Mulai latihan!". 
 * Setelah itu, fungsi tersebut akan menampilkan pesan "Lari {n} meter!" setiap 1 detik. 
 * Fungsi ini harus berhenti setelah menampilkan pesan "Lari 10 meter!".
 * 
 */

mulaiLatihan();
// Tunggu 2 detik...
// "Mulai latihan!"
// (setelah 1 detik) "Lari 1 meter!"
// (setelah 1 detik lagi) "Lari 2 meter!"
// ... 
// (setelah 1 detik lagi) "Lari 10 meter!"


/**
 * Iterasi Array dengan callback
 * 
 * Buatlah fungsi iterasiArrayDenganCallback(arr, callback) yang menerima sebuah array dan sebuah callback. 
 * Fungsi tersebut harus memanggil callback untuk setiap elemen dalam array tersebut.
 */

const data = [1, 2, 3, 4, 5];

iterasiArrayDenganCallback([1, 2, 3], (item, index) => {
    console.log(`Index: ${index}, Value: ${item}`);
});
// Output:
// Index: 0, Value: 1
// Index: 1, Value: 2
// Index: 2, Value: 3
// Index: 3, Value: 4
// Index: 4, Value: 5


/**
 * Pengurutan dengan Callback
 * 
 * Tuliskan sebuah fungsi urutkanArray(arr, compareFunc, callback) yang menerima sebuah array, fungsi perbandingan, dan sebuah callback. 
 * Fungsi tersebut harus mengembalikan array yang sudah diurutkan sesuai dengan fungsi perbandingan ke fungsi callback.
 * 
 */

urutkanArray([3, 1, 4, 1], (a, b) => a - b, (hasil) => {
    console.log(hasil); // [1, 1, 3, 4]
});
  