// if & else ------------------------------------------------------------------------------------------------------
// ======================== contoh
let angka = prompt('masukan angka')

if(angka % 2 == 0) {
    alert(angka + ' bilangan GENAP')
} else{
    alert(angka + ' bilangan GANJIL')
}
// hasil di tentukan user 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// latihan -------------------------------------------------------------------------------------------------------
// ======================= jawaban
let jumlahAngkot = 10;
let angkotBeroprasi = 6;

for(let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
    if(noAngkot <= 6){
        console.log('Mobil no ' + noAngkot + ' angkot sedang beroperasi.');
    } else{
        console.log('angkot no ' + noAngkot + ' tidak beroperasi.');
    }
}
// end
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
