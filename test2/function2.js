// Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil ke besar
// dan besar ke kecil dengan manual tanpa fungsi bawaan javascript.

// Mengurutkan dari kecil ke besar
function sortAscending(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    console.log(arr);
    return arr;
}

// Mengurutkan dari besar ke kecil
function sortDescending(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    console.log(arr);
    return arr;
}

let array = [5, 7, 3, 6, 8, 1, 4, 2];
sortAscending(array); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
sortDescending(array); // Output: [8, 7, 6, 5, 4, 3, 2, 1]

module.exports = { sortAscending, sortDescending };