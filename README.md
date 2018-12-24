# practical-javascript-exercises
Practical Javascript Exercises base from Watch and Code Course

# Practical Javascript Course

## Module 1 : Arrays
Secara umum Array dideskripsikan sebagai 'Objek yang mirip seperti daftar', pada dasarnya Array memuat single object yang berisi banyak nilai yang disimpan dalam daftar

Cara mendeklarasikan array adalah sebagai berikut
```
var arrayBaru = [];
```

### Mengakses nilai Spesifik pada Array
Untuk mengakses elemen spesifik pada array menggunakan nomor pada kurung persegi, dimulai dengan angka 0 karena perhitungan komputer dimulai dengan angka 0

Contoh :
```
  var arrayBaru = ['item 1', 'item 2'];

  console.log(arrayBaru[0]);
  console.log(arrayBaru[1]);

  // hasil : 'item 1'
             'item 2'
```

### Array Method
Beberapa Metode yang biasa digunakan pada tipe data array adalah

* ***Array.push***
  *Array.push* adalah metode yang digunakan untuk menambahkan data atau nilai pada baris terakhir urutan nilai pada Array
  Contoh: 
  ```
  arrayBaru.push('item 3');

  console.log(arrayBaru);

  // hasil: ['item 1', 'item 2', 'item 3']
  ```
* ***Array.splice***
  *Array.splice* adalah metode array untuk menghapus item / elemen secara spesifik dan mengembalikan nilai item yang telah dihapus pada array
  Syntax:
  ```
  Array.splice(index, deleteCount);
  ```
  *index*: posisi awal elemen yang akan dihapus,
  *deleteCount*: Banyaknya elemen yang akan dihapus.
  Contoh:
  Untuk menghapus elemen ke 2 pada array
  ```
  arrayBaru.splice(1, 1)

  console.log(arraybaru);

  // hasil: ['item 1', 'item 3'];
  ```  

## Module 2 Functions
Function adalah 'building blok' utama pada program, digunakan untuk mengeksekusi sekumpulan kode tanpa menuliskan kode berulang kali.

### Mendeklarasikan Function
Untuk membuat function pada Javascript kita menggunakan *Function Declaration*
```
function myFunction() {
  console.log('Hi'); // konteks lokal fungsi atau body fungsi
}
```
Untuk memanggil fungsi pada javascript kita tinggal memanggil nama dari fungsi tersebut diikuti dengan kurung buka dan tutup
```
function myFunction() {
  console.log('Hi Agung');
}

myFunction() // hasil: 'Hi Agung'
```

### Function Parameter
Beberapa fungsi memerlukan parameter, beberapa orang menyebutnya *local variable* dalam konteks fungsi, fungsi parameter digunakan secara spesifik, contoh untuk menuliskan kode pada fungsi diatas kita perlu nama yang berbeda, parameter dapat diisi dengan tipe data apapun, baik string, number maupun boolean.
```
function myFunction(nama) {
  console.log('Hi' + nama);
}

muFunction('Fanji');
// hasil : 'Hi Fanji'
```

