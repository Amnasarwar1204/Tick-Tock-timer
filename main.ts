#!/usr/bin/env node

//import liberies
import inquirer from "inquirer"
import chalk from "chalk"
import {differenceInSeconds} from "date-fns"


console.log(chalk.bold.redBright("**********Welcome in TickTock Timer**********"))
//select option
const opt = await inquirer.prompt([{
    name:"opt1",
    type:"list",
    choices:["1.Countdown in Min","2.Countdown in Sec","3.Countdown in Hours"],
    message:"What do you want to do?"
}])

console.log(chalk.bold.italic.greenBright("In any countdown you want to stop just click ctrl + C"))

//for Min
if(opt.opt1 ==="1.Countdown in Min" ){
    const res = await inquirer.prompt([{
        name:"userinput",
        type:"number",
        message:"Enter the amount of min",
        validate: (input:number)=>{
            if(isNaN(input)){
                return "Please enter valid number"
            }else if(input > 5){
                return "Please enter less than 5 min"
            }else{
                return true; 
            }
    
        }
    }]);
    
    let input = res.userinput
    
    function startTime(val:number){
        const endTime = new Date().getTime() + val * 60 * 1000;
        const intervalTime = setInterval((()=>{
            const currTime = new Date().getTime()
            const timeDiff = endTime-currTime
            if(timeDiff <= 0){
                console.log(chalk.bold.italic.yellow("Time's up!"))
                clearInterval(intervalTime)
                // process.exit()
            }
            const totalSeconds = Math.floor(timeDiff / 1000);
            const min = Math.floor(totalSeconds / 60);
            const sec = totalSeconds % 60;
            console.log(`${chalk.bold.red(min.toString().padStart(2,"0"))}:${chalk.bold.red(sec.toString().padStart(2,"0"))}`);
        }),1000)
    
    }
    startTime(input)
}

//for sec
if(opt.opt1 === "2.Countdown in Sec" ){
    const res = await inquirer.prompt([{
        name:"userinput",
        type:"number",
        message:"Enter the amount of seconds",
        validate: (input:number)=>{
            if(isNaN(input)){
                return "Please enter valid number"
            }else if(input > 60){
                return "Please enter less than 60 seconds"
            }else{
                return true; 
            }
    
        }
    }]);
    
    let input = res.userinput
    
    function startTime(val:number){
        const intTime = new Date().setSeconds(new Date().getSeconds() + val);
        const intervalTime = new Date(intTime);
        setInterval((()=>{
            const currTime = new Date()
            const timeDiff = differenceInSeconds(intervalTime,currTime);
    
            if(timeDiff <= 0){
                console.log(chalk.bold.italic.yellow("Time's up!"))
                process.exit()
            }
            const min = Math.floor((timeDiff%(3600*24))/3600)
            const sec = Math.floor(timeDiff%60)
            console.log(`${chalk.bold.red(min.toString().padStart(2,"0"))}:${chalk.bold.red(sec.toString().padStart(2,"0"))}`);
        }),1000)
    
    }
    startTime(input)

}

//for Hours
if(opt.opt1 === "3.Countdown in Hours"){
    const res = await inquirer.prompt([{
        name:"userinput",
        type:"number",
        message:"Enter the amount of Hours",
        validate: (input:number)=>{
            if(isNaN(input)){
                return "Please enter valid number"
            }else if(input > 5){
                return "Please enter less than 5 Hours"
            }else{
                return true; 
            }
    
        }
    }]);
    
    let input = res.userinput
    
    function startTime(val:number){
        const endTime = new Date().getTime() + val * 60 * 60 * 1000;
        const intervalTime = setInterval((()=>{
            const currTime = new Date().getTime()
            const timeDiff = endTime-currTime
            if(timeDiff <= 0){
                console.log(chalk.bold.italic.yellow("Time's up!"))
                clearInterval(intervalTime)
                // process.exit()
            }
            const totalSeconds = Math.floor(timeDiff / 1000);
            const hours = Math.floor(totalSeconds/ 3600);
            const min = Math.floor((totalSeconds % 3600)/60);
            const sec = totalSeconds % 60;
            console.log(`${chalk.bold.red(hours.toString().padStart(2,"0"))}${chalk.bold.red(min.toString().padStart(2,"0"))}:${chalk.bold.red(sec.toString().padStart(2,"0"))}`);
        }),1000)
    
    }
    startTime(input)
}