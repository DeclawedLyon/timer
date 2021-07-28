const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const clock = () => {
  rl.question(`\n
  Type 'b' to beep.
  Type a number from 1 to 9 to set a timer for a beep
  Press 'ctrl + c' to exit the application:`, (answer) => {
   
    if (answer === 'b') {
      console.log(answer);
      setTimeout(() => {process.stdout.write('\x07')}, 50);
      return clock();
    }
    if (answer > 0 && answer < 10) {
      console.log(answer);
      setTimeout((answer) => {process.stdout.write('\07')}, answer * 1000)
      return clock();
    }
    rl.close()
  })
}
clock();