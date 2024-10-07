import _ from 'lodash';
import set from '../src/dataPreparation.js';

/* Напишите тесты для функции set(obj, path, value) возвращающей объект, в котором она изменяет или добавляет значение по указанному пути.

Данная функция мутирует объект, поэтому каждый запуск тестов будет вносить изменения в исходный объект. 
Постройте тестирование таким образом, чтобы тесты не зависели друг от друга, а каждая проверка выполнялась в сравнении с исходным объектом. */

let object;
let copyObject;

beforeEach(() => {
  object = { a: [{ b: { c: 3 } }] };
  copyObject = _.cloneDeep(object);
});

test('nested set', () => {
  set(object, 'a[0].b.c', 4);
  copyObject.a[0].b.c = 4;
  expect(object).toEqual(copyObject);
});

test('plain set', () => {
  set(object, 'a', 3);
  copyObject.a = 3;
  expect(object).toEqual(copyObject);
});

test('set new property', () => {
  set(object, 'a[0].b.d', 7);
  copyObject.a[0].b.d = 7;
  expect(object).toEqual(copyObject);
});