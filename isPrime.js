function isPrime(number) {
  const limit = Math.sqrt(number) + 1;

  let answer = true;

  if (number === 1 || number === 2) {
    answer = true;
    return answer;
  }

  if (number % 2 === 0) {
    answer = false;
    return answer;
  }

  for (let i = 3; i < limit; i += 2) {
    if (number % i === 0) {
      answer = false;
      break;
    }
  }

  return answer;
}

function main() {
  const input = process.argv[2];

  if (!Number.isFinite(Number(input))) {
    console.error(`Error: "${input}" is not finite number`);
    return 1;
  }

  const number = Number(input);

  if (!Number.isInteger(number)) {
    console.error(`Error: "${number}" is not an integer`);
    return 2;
  }

  if (isPrime(number)) {
    console.log(`${number} is a prime number!`);
  } else {
    console.log(`${number} isn't a prime number!`);
  }

  return 0;
}

main();
