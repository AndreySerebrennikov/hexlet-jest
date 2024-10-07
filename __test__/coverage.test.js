import getDaysInMonth from '../src/coverage.js'
/* Напишите недостающие проверки для тестирования функции getDaysInMonth(month, year). Функция возвращает количество дней 
в указанном месяце в указанном году. Аргументы:

month - число от 1 до 12. Если указан несуществующий месяц, то функция возвращает null.
year - число. Функция учитывает, указан високосный год или обычный, и возвращает соответствующее количество дней в феврале. */

test('testing function getDaysInMonth()', () => {
  expect(getDaysInMonth(4, 2023)).toBe(30);
  expect(getDaysInMonth(2, 2024)).toBe(29);
  expect(getDaysInMonth(2, 2023)).toBe(28);
  expect(getDaysInMonth(10, 2024)).toBe(31);
  expect(getDaysInMonth(13, 2024)).toBe(null);
});
