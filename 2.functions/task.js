'use strict';

// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;
  // Проверяем элементы масива и находим сумму элементов
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    };
    if(arr[i] < min){
      min = arr[i];
    };
    sum += arr[i];

  };
  // Находим среднее значение 
  avg = sum / arr.length;
  avg = parseFloat(avg.toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  // Находим сумму элементов
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  let sumOfArr = 0;
  // Вычисляем сумму массива
    for(let i = 0; i < arrOfArr.length; i++){
      sumOfArr = func(arrOfArr[i]);
  // Поверяем условие
      if(sumOfArr > max){
        max = sumOfArr;
      }
    }
    
  return max;
}

// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;
  let diff;
  // Проверяем элементы массива
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    };
    if(arr[i] < min){
      min = arr[i];
    };
    // Находим разницу
    diff = max - min;

  };

  return diff;
}
