// mendeklarasikan tipe data array
var someArray = [];

// menambahkan item/elemen pada array
someArray.push('item 1');
someArray.push('item 2');
someArray.push('item 3');
console.log(someArray);

// mengakses nilai spesifik pada array
// akses elemen pertama pada array
console.log(someArray[0]);

// menghapus item secara spesifik pada array
someArray.splice(0, 2);
console.log(someArray);
