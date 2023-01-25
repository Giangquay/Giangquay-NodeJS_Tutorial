import chalk from "chalk";

class OuputType {
  static INFORMATION = "INFORMATION";
  static SUCCESS = "SCUCESS";
  static WARNING = "WARNING";
  static ERROR = "ERROR";
}
function print(message, ouputType) {
  switch (ouputType) {
    case OuputType.INFORMATION:
      console.log(chalk.yellowBright(message));
      break;
    case OuputType.SUCCESS:
      console.log(chalk.green(message));
      break;
    case OuputType.WARNING:
      console.log(chalk.yellow(message));
      break;
    case OuputType.ERROR:
      console.log(chalk.red(message));
      break;
      default:
        console.log(chalk.yellowBright(message))
  }
}

export {
    OuputType,
    print,
}