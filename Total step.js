function number(num) {
  let i = 1;

  while (num !== 1) {

    if (num % 2 !== 0) {
      num = 3 * num + 1;
    } else {
      num = num / 2;
    }

    i++;
  }

  console.log(i);
}

for(let i = 1;i<=1000;i++){
         number(i)}
