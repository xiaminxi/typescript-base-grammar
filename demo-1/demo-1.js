/*
 * @Author: xiaminxi
 * @Date: 2020-05-08 23:52:37
 * @LastEditors: xiaminxi
 * @LastEditTime: 2020-05-09 00:09:34
 * @Description: 基本类型
 */
// Number 类型 可以支持整数和小数
var age = 18;
var stature = 178.5;
var next = NaN;
console.log(age);
console.log(stature);
console.log(next);
console.log("=============================");
// String 类型
var name_ = "xiaminxi";
console.log(name_);
console.log("=============================");
// boolean true false
var as = true;
var b = false;
console.log(as, b);
console.log("=============================");
// 枚举类型
var REN;
(function (REN) {
    REN["nan"] = "\u7537";
    REN["nv"] = "\u5973\u4EBA";
    REN["yao"] = "\u4EBA\u5996";
})(REN || (REN = {}));
console.log(REN.yao);
console.log("=============================");
// any 类型
var t = "xiaminxi";
t = false;
t = 124;
console.log(t);
console.log("=============================");
// null类型
var xiamin_ = null;
console.log(xiamin_);
