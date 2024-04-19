#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function wordsCounter() {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "sentence",
            message: chalk.magentaBright("Enter Your Sentence To Count The Word")
        }
    ]);
    const words = answers.sentence.trim().split(" ");
    console.log(chalk.cyanBright(`Words in Your Sentence are: ${words.length}`));
    const playAgain = await inquirer.prompt([
        {
            type: "confirm",
            name: "restart",
            message: chalk.blueBright("Do you want to play again?"),
            default: false
        }
    ]);
    if (playAgain.restart) {
        wordsCounter(); // Restart the game
    }
    else {
        console.log(chalk.yellowBright("Thank you for playing!"));
    }
}
wordsCounter();
