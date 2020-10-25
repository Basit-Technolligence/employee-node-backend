const add = (a, b) => {
  return a + b;
};

const doWork = async () => {
  const sum = await add(1, 2);
  const sum2 = await add(sum, 4);
  return sum2;
};

doWork()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
