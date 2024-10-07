import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import getFunction from '../functions.js';

/* Функция принимает путь к файлу и возвращает HTML в виде строки.
Каждый из входных файлов для этой функции содержит список элементов из которых формируется элемент <ul>. Входные данные и выходной HTML можно подсмотреть в фикстурах.
Ваша задача, пропустить через эту функцию входные файлы и сравнить результат работы функции с ожидаемым значением находящимся в файле __fixtures__/result.html. */


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const toHtmlList = getFunction();

// BEGIN (write your solution here)
const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);

test('toHtmlList', () => {
  const filePath = getFixturePath('list.csv');
  const actual = toHtmlList(filePath);
  const expected = fs.readFileSync(getFixturePath('result.html'), 'utf-8');
  expect(actual).toEqual(expected.trim());
});

test('toHtmlList', () => {
  const filePath = getFixturePath('list.json');
  const actual = toHtmlList(filePath);
  const expected = fs.readFileSync(getFixturePath('result.html'), 'utf-8');
  expect(actual).toEqual(expected.trim());
});

test('toHtmlList', () => {
  const filePath = getFixturePath('list.yml');
  const actual = toHtmlList(filePath);
  const expected = fs.readFileSync(getFixturePath('result.html'), 'utf-8');
  expect(actual).toEqual(expected.trim());
});



/* Решение учителя */ 

// const formats = ['csv', 'json', 'yml'];
// const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);

// let expected;

// beforeEach(() => {
//   expected = fs.readFileSync(getFixturePath('result.html'), 'utf-8');
// });

// test.each(formats)('%s', (format) => {
//   const filePath = getFixturePath(`list.${format}`);
//   const actual = toHtmlList(filePath);
//   console.log(actual);
//   expect(actual).toEqual(expected.trim());
// });