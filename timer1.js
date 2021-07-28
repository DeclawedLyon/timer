const args = process.argv.splice(2);

// console.log(args)

const timer = (countdowns) => {
  // console.log(countdowns[0])
  if (countdowns[0] === undefined) {
    return 'Error';
  }
  for (const count of countdowns)
  if (count > 0) {
    output(count);
  } else if (count < 0) {
    return 'Error'
  }

}

const output = (timer) => {
  setTimeout(() => {
    process.stdout.write('Beep!')
    process.stdout.write('\x07')
  }, timer * 1000)
}

console.log(timer(args));