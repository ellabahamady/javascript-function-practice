const { isPalindrome } = require('./function3');

test('the string is palindrom or not', () => {
  expect(isPalindrome("Kasur ini rusak")).toBe(true);
});

test('the string is palindrom or not', () => {
  expect(isPalindrome("Hello World")).toBe(false);
});

test('the string is palindrom or not', () => {
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
});