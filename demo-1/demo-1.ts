/*
 * @Author: xiaminxi
 * @Date: 2020-05-08 23:52:37
 * @LastEditors: xiaminxi
 * @LastEditTime: 2020-05-09 00:09:34
 * @Description: 基本类型
 */

// Number 类型 可以支持整数和小数
var age: number = 18
var stature: number = 178.5
var next: number = NaN
console.log(age)
console.log(stature)
console.log(next)
console.log("=============================")

// String 类型
var name_: string = "xiaminxi"
console.log(name_)
console.log("=============================")

// boolean true false
var as: boolean = true
var b: boolean = false
console.log(as, b)
console.log("=============================")

// 枚举类型
enum REN{nan="男", nv="女人", yao="人妖"}
console.log(REN.yao)
console.log("=============================")

// any 类型
var t:any = "xiaminxi"
t = false
t = 124
console.log(t)
console.log("=============================")

// null类型
var xiamin_:null = null
console.log(xiamin_)


