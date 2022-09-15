function buildUnsortedArr(size) {
  let arr = [];

  for (let i = 0; i < size; i++) {
    const num = Math.floor(Math.random() * 100);
    arr.push(num);
  };

  console.log(arr);
  return arr;
}

export default buildUnsortedArr;