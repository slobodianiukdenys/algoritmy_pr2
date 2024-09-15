// Ініціалізація змінних
const arrLength = 5;
let arr = [];
let odd = [];
let even = [];
let maxRandom = 99;
let minRandom = -99;
let oddLength;
let evenLength;
let avg = 0;
let biggerThanAverage = 0;

// Функція для заповнення масиву випадковими числами
function FillArray() {   
    arr = [];
    for (let i = 0; i < arrLength; i++) {
        const minCeiled = Math.ceil(minRandom);
        const maxFloored = Math.floor(maxRandom);
        const x = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
        arr.push(x);
    }
}

// Функція для розділення елементів на парні та непарні
function even_or_odd() {
    odd = [];
    even = [];
    for (let r = 0; r < arrLength; r++) {
        if (arr[r] % 2 === 0) {
            even.push(arr[r]);
        } else {
            odd.push(arr[r]);
        }
    }
}

// Функція для підрахунку кількості парних і непарних елементів
function CountOddsAndEvens() {
    oddLength = odd.length;
    evenLength = even.length;
}

// Функція для обчислення середнього значення масиву
function CountAverage(arr) {
    if (arr.length === 0) {
        return 0; 
    }
    
    let sum = 0;
    for (let a = 0; a < arr.length; a++) {
        sum += arr[a];
    }
    
    avg = sum / arr.length;
    return avg; // Повертаємо середнє значення
}

// Функція для підрахунку кількості елементів більших за середнє значення
function CountGreaterThanAverage(arr) {
    const average = CountAverage(arr);
    
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count++;
        }
    }
    biggerThanAverage = count;
}

// Функція для утворення третього масиву як попарної суми елементів двох масивів однакової довжини
function SumArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        throw new Error("Масиви повинні бути однакової довжини");
    }
    
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }
    return result;
}

// Функція для утворення третього масиву як конкатенації двох масивів різної довжини
function ConcatArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

// Функція для поміняти місцями максимум та мінімум в масиві
function SwapMinMax(arr) {
    if (arr.length === 0) return;

    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) minIndex = i;
        if (arr[i] > arr[maxIndex]) maxIndex = i;
    }

    // Поміняти місцями
    [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];
}

// Функція для поділу масиву на два масиви: з додатніх та від’ємних елементів
function SplitArray(arr) {
    let positive = [];
    let negative = [];

    for (let item of arr) {
        if (item >= 0) {
            positive.push(item);
        } else {
            negative.push(item);
        }
    }

    return { positive, negative };
}

// Функція для видалення дублікатів максимума та мінімуму з масиву
function RemoveDuplicates(arr) {
    if (arr.length === 0) return arr;

    let min = Math.min(...arr);
    let max = Math.max(...arr);

    return arr.filter(item => item !== min && item !== max);
}

// Функція для обчислення середнього арифметичного двох масивів і утворення третього масиву з елементів обидвох масивів, що знаходяться в межах між значеннями середніх арифметичних
function CreateArrayBetweenAverages(arr1, arr2) {
    let avg1 = CalculateAverage(arr1);
    let avg2 = CalculateAverage(arr2);

    let minAvg = Math.min(avg1, avg2);
    let maxAvg = Math.max(avg1, avg2);

    return arr1.concat(arr2).filter(val => val > minAvg && val < maxAvg);
}

// Функція для обчислення середнього значення
function CalculateAverage(arr) {
    if (arr.length === 0) return 0;

    let sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
}

// Виклик функцій
FillArray();
even_or_odd();
CountOddsAndEvens();
CountAverage(arr);
CountGreaterThanAverage(arr);

// Приклад використання інших функцій
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let summedArray = SumArrays(arr1, arr2);
console.log(`Сума масивів: ${summedArray}`);

let arr3 = [7, 8];
let arr4 = [9, 10, 11];
let concatenatedArray = ConcatArrays(arr3, arr4);
console.log(`Конкатенація масивів: ${concatenatedArray}`);

let arr5 = [3, 1, 4, 1, 5, 9];
SwapMinMax(arr5);
console.log(`Масив після заміни: ${arr5}`);

let arr6 = [-3, 1, -4, 1, 5, -9];
let { positive, negative } = SplitArray(arr6);
console.log(`Позитивні: ${positive}`);
console.log(`Від'ємні: ${negative}`);

let arr7 = [1, 2, 3, 1, 4, 3, 1];
let cleanedArray = RemoveDuplicates(arr7);
console.log(`Масив без дублікатів максимума та мінімуму: ${cleanedArray}`);

let arr8 = [1, 2, 3, 4];
let arr9 = [5, 6, 7, 8];
let filteredArray = CreateArrayBetweenAverages(arr8, arr9);
console.log(`Масив з елементів між середніми арифметичними: ${filteredArray}`);

// Виведення результатів
console.log(`Масив: ${arr}`);
console.log(`Непарний масив: ${odd}`);
console.log(`Парний масив: ${even}`);
console.log(`Непарні: ${oddLength}`);
console.log(`Парні: ${evenLength}`);
console.log(`Середнє: ${avg}`);
console.log(`Кількість елементів більших за середнє значення: ${biggerThanAverage}`);
