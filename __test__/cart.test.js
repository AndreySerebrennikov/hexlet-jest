/* Напишите тесты для корзины интернет-магазина. Интерфейс:

makeCart() – создаёт новую пустую корзину.
addItem(products, count) – добавляет в корзину товары и их количество. Товар – это объект с двумя свойствами: name (имя) и price (стоимость).
getItems() – возвращает список товаров в формате [{ product, count }, { product, count }, ...]
getCost() – возвращает стоимость корзины. Стоимость корзины высчитывается как сумма всех добавленных товаров с учётом их количества.
getCount() – возвращает количество товаров в корзине. */

test('Cart', () => {
  const cart = makeCart();
  expect(cart.getItems()).toHaveLength(0);

  cart.addItem({ name: 'car', price: 3 }, 5);
  expect(cart.getItems()).toEqual(expect.arrayContaining(
    [
      {
        product: { name: 'car', price: 3 },
        count: 5,
      },
    ],
  ));
  cart.addItem({ name: 'house', price: 10 }, 2);
  expect(cart.getItems()).toEqual(expect.arrayContaining(
    [
      {
        product: { name: 'car', price: 3 },
        count: 5,
      },
      {
        product: { name: 'house', price: 10 },
        count: 2,
      },
    ],
  ));
  expect(cart.getItems().length).toEqual(2);
  expect(cart.getCost()).toEqual(35);
  expect(cart.getCount()).toEqual(7);
  cart.addItem({ name: 'house', price: 10 }, 1);
  expect(cart.getItems().length).toEqual(3);
  expect(cart.getCost()).toEqual(45);
});