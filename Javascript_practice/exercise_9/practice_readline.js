import readline from 'node:readline';

const r = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

readline.question("Enter your name: ", (your_name) => {
    console.log(`Welcome back ${your_name}!`);
}
);