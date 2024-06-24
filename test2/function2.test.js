const { sortAscending, sortDescending } = require('./function2');

test('sorting ascending', () => {
  expect(sortAscending([5, 7, 3, 6, 8, 1, 4, 2])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test('sorting desscending', () => {
  expect(sortDescending([5, 7, 3, 6, 8, 1, 4, 2])).toStrictEqual([8, 7, 6, 5, 4, 3, 2, 1]);
});