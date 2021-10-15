'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  // Вычисляем дискриминант
  let d = (b ** 2) - (4 * a * c);
  // Обрабатываем условия
  if (d == 0) {
    arr.push((-b) / 2 * a);
  };

  if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  };

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    
  // Проверяем корректность данных
  if (isNaN(percent) ||  percent <= 0 || percent > 100) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  };

  if (isNaN(contribution) || contribution < 0) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  };

  if (isNaN(amount) ||  amount <= 0 ) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  };

  if (isNaN(Date.parse(date)) || date < new Date()) {
    // Пробразуем дату в строку
    let dateFinal = date.toLocaleDateString()
    return `Параметр "Срок ипотеки" содержит неправильное значение "${dateFinal}"`
  };
  // Тело кредита
  let primaryLoan = amount - contribution;
  // Срок кредита в месяцах
  let monthAmount = (date.getFullYear() - new Date().getFullYear()) * 12 - new Date().getMonth() + date.getMonth();
  // Процентная ставка
  let monthPercent = percent / 100 / 12 ;
  // Ежемесячных платёж
  let monthlyPay = primaryLoan *(monthPercent + monthPercent /(((1 + monthPercent)**monthAmount)-1));
  // Общая сумма кредита
  let totalAmount = monthlyPay * monthAmount;

  return parseFloat(totalAmount.toFixed(2));
};
