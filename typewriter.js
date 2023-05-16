
const sentence = "hello there from lighthouse labs\n";

// var delayTime = 0;
// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.
// }
// console.log();

var delay = 0;  
for (const char of sentence) {
  delay = delay + 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, delay) 
}

setTimeout(() => {
  console.log();
}, delay)

