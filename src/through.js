
const array = [1, 2, 3, 4];
const getImplementation = (coll, value, start = 0, end = coll.length) => coll
  .map((item, index) => {
    if (index >= start && index < end) {
      return value.replace(item.toString(), 2);
    }
    return item;
  })
export default getImplementation;
