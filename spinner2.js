const symbols = "|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\\n";
let time = 100;

for (let i = 0; i < symbols.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + symbols[i] + "   ");
  }, time);
  time += 200;
}