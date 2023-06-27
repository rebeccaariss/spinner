// 20 rotations by default
const symbols = "|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|\n";
let time = 100;

// user can specify desired number of rotations via command line argument:
let rotations = process.argv[2];
let userSpecified = "";

const spinner = (rotations) => {
  if (rotations) {
    for (let i = 0; i < rotations; i++) {
      userSpecified += "|/-\\";
    }
    userSpecified += "|";

    for (let i = 0; i < userSpecified.length; i++) {
      setTimeout(() => {
        process.stdout.write("\r" + userSpecified[i] + "   ");
      }, time);
      time += 200;
    }

    setTimeout(() => {
      process.stdout.write("\n");
    }, time);
    time += 200;

  } else {
    // default behaviour:
    for (let i = 0; i < symbols.length; i++) {
      setTimeout(() => {
        process.stdout.write("\r" + symbols[i] + "   ");
      }, time);
      time += 200;
    }
  }
};

spinner(rotations);