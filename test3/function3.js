// Buatlah fungsi dengan input string jika string tersebut dibalik 
// dan tetap sama dengan string yang diinputkan maka return true jika tidak return false

function isPalindrome(str) {
    // Menghilangkan karakter non-alphanumeric dan mengubah menjadi huruf kecil
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Membalikkan string
    const reversedStr = cleanedStr.split('').reverse().join('');

    // Memeriksa apakah string yang dibalik sama dengan string asli
    console.log(cleanedStr === reversedStr)
    return cleanedStr === reversedStr;
}

isPalindrome("Kasur ini rusak"); // Output: true
isPalindrome("Hello World"); // Output: false
isPalindrome("A man, a plan, a canal, Panama"); // Output: true

module.exports = { isPalindrome };