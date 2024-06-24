// Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping,
// dimana jika angka tersebut habis dibagi 3 cetak "fish"
// jika habis dibagi 5 cetak "bash"
// dan jika habis dibagi 15 cetak "fish bash",
// cetak cukup salah satu dari kondisi tersebut,
// cetak menggunakan console log atau sejenisnya.

function modulo(x) {
    let message = "";
    
    if(x % 15 === 0){
        message = "fish bash";
    } else if(x % 5 === 0){
        message = "bash";
    } else if(x % 3 === 0){
        message = "fish";
    } else {
        message = "";
    }

    console.log(message);
    return message
}

modulo(12); // Output: "fish"
modulo(10); // Output: "bash"
modulo(15); // Output: "fish bash"

module.exports = { modulo };