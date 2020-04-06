function simulateButtonClick(cb, times) {
  for (let i = 0; i < times; i++) {
    cb(i);
  }
}

test("Testing the callback matchers", () => {
  const onButtonClick = jest.fn();
  simulateButtonClick(onButtonClick, 4);

  expect(onButtonClick).toHaveBeenCalled();
  expect(onButtonClick).toHaveBeenCalledTimes(4);

  expect(onButtonClick).toHaveBeenCalledWith(0);
  expect(onButtonClick).toHaveBeenCalledWith(1);
  expect(onButtonClick).toHaveBeenCalledWith(2);
  expect(onButtonClick).toHaveBeenCalledWith(3);
  expect(onButtonClick).not.toHaveBeenCalledWith(4);

  expect(onButtonClick).toHaveBeenLastCalledWith(3);
  expect(onButtonClick).not.toHaveBeenLastCalledWith(1);
});
