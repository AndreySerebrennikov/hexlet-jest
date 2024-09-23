import _ from 'lodash';

/* Напишите тесты для функции without(coll, [values]), которая принимает первым параметром массив и возвращает 
его копию, из которой исключены значения, переданные вторым и последующими параметрами. */

const without = (numbers, ...values) => {
  return _.without(numbers, ...values);
};
export default without;
