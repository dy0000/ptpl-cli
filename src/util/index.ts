/*
 * @Author: KoTen_Bu
 * @Date: 2021-08-23 15:41:36
 * @LastEditTime: 2021-08-27 10:53:16
 * @LastEditors: KoTen_Bu
 * @Description: 
 * @FilePath: \cli\src\util\index.ts
 */

import { resolve } from 'path'
import chalk from 'chalk'

// 项目本地路径
export const getDirPath = (relPath: string) => {
  return resolve(__dirname,'../../',relPath)
}
// 模板位置
export const templatePath = getDirPath('./template')
// 获取运行路径
export const getCwdPath = (relPath: string) => {
  return resolve(process.cwd(), relPath)
}

// 计时日志
export const loggerTiming = (str: string, start: boolean) => {
  if (start) {
    console.time('Timing')
    console.log(chalk.cyan(`****** ${str} START ******`))
  } else {
    console.log(chalk.cyan(`****** ${str} END ******`))
    console.timeEnd('Timing')
  }
}

// 普通日志
export const loggerInfo = (str: any) => {
  console.log(chalk.green(`[INFO]： ${str}`));
}

// 警告日志
export const loggerWarring = (str: any) => {
  console.log(chalk.yellowBright(`[WARRING]： ${str}`));
}

// 成功日志
export const loggerSuccess = (str: string) => {
  console.log(chalk.greenBright(`[SUCCESS]： ${str}`));
}

// 报错日志
export const loggerError = (str: string) => {
  console.log(chalk.redBright(`[ERROR]： ${str}`));
}