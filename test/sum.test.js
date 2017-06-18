function sum(a, b){
  return a + b;
};

test('adds', () => {
  const result = sum(1, 2);

  expect( result ).toBe( 3 );
});