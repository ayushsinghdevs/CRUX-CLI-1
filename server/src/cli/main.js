#!/usr/bin/env node

import dotenv from "dotenv";
import chalk from "chalk";
import figlet from "figlet";

import { Command } from "commander";
import { login, logout, whoami } from "./commands/auth/login.js";
import { wakeUp } from "./commands/ai/wakeUp.js";

dotenv.config();


async function main() {
    //Display Banner
    console.log(
        chalk.cyan(
            figlet.textSync("CRUX CLI", {
                font:"Standard",
                horizontalLayout: "default",
            })
        )
    )

    console.log(chalk.green("A CLI based AI Tool \n"))

    const program = new Command("crux");

    program.version("1.0.0")
    .description("Crux CLI - A command line AI tool designed to streamline your terminal workflows")
    .addCommand(login)
    .addCommand(logout)
    .addCommand(whoami)
    .addCommand(wakeUp)

       // Default action shows help
  program.action(() => {
    program.help();
  });


  program.parse()
}

main().catch((err)=>{
    console.log(chalk.red("Error running Crux CLI:"), err)
    process.exit(1)
})