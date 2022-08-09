/*
 * @Author: qinhaojie
 * @Date: 2021-09-04 09:24:55
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-08-09 14:21:01
 * @Description: 常用插件的引入 （自动引入兄弟文件）
 * @FilePath: project\src\plugins\include.js
 */

const files = import.meta.globEager("./*.js");
// console.log(files);
