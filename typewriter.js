
const sentence = "hello there from lighthouse labs\n";

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

