function number(num) {
  let i = 1;

  while (num !== 1) {

    if (num % 2 !== 0) {
      num = 3 * num + 1;
      console.log(num)
    } else {
      num = num / 2;
      console.log(num)
    }

    i++;
  }

//   console.log(i);
}

number(113)