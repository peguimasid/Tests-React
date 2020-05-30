function sum(a, b) {
  return a + b;
}

test('example', () => {
  const result = sum(3 , 4)

  expect(result).toBe(7);
})