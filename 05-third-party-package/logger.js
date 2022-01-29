//import lodash from 'lodash'
import chalk from 'chalk'

const  green= () => console.log(chalk.green("success message"));
const yellow = () =>console.log(chalk.yellow("warn message")); 
const red = () => console.log(chalk.red("error message"));

//module.exports  =
export{
  green,yellow,red
};