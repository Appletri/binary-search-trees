function sortArr(arr) {
  const temp = arr;
  const size = arr.length;
  let newArr = [];

  for (let i = 0; i < size; i++) {
    let num = temp.shift();
    if (!temp.includes(num)) {
      newArr.push(num);
    };
  };

  newArr.sort((a, b) => a - b);
  console.log(newArr);
  return newArr;
}

export default sortArr;