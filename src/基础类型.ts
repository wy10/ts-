// 1.基础类型
// 最基本的 数字 字符串 布尔
// number 和 Number的区别，js特性 Number是类，用来当作类型也可以描述实例
// let number1:number = Number(1)是可以的，这个操作的意思是将1转成数字类型，但如果是 let number1:number = new Number(1)
// 就有问题了，因为你实例需要用Number类型来接收=》 let number:Number = new Number(1)

let str:string = 'hello'
let num1:Number = 2
let num2:number = Number(2)
let num3:Number = new Number(2)
let num4:Number = new Number(2)
console.log(num1 === num2,num1 === num3, num3 === num4) // true false false
num1 = 4 //其实是把num1指向常量为4的地址空间，如果这个时候把num2 = 3,那么常量为2的内存空间将会被回收

let arr:number[] = []
// 联合类型
let arr1:(number | string)[] = [] //既能放字符串又能放数组
let arr2:any[] = [] //数组里可以放任意类型的东西
// 元组：ts自己实现的 内容固定 类型固定，某个数据按照自己的规则来存储，但是可以使用数组的方法tuple.push("str")
const tuple:[string,boolean,number] = ['a',true,1] //转换成底层js实现就是数组，只不过按照顺序规定了类型
// 不能通过不存在的索引来更改元组， tuple[3] = "5", 但是可以使用push和pop
tuple[2] = 2
console.log(tuple)

// 枚举，ts最终编译成js，ts也只是为了提高开发效率，为了给你有代码提示
// 普通枚举，异构枚举，常量枚举
enum ROLE {
  USER,
  ADMIN,
  MANAGER
}
// 异构枚举，加入第一个放字符串，枚举推断不出ADMIN等于多少仍需要给ADMIN赋值，假如ADMIN赋值数字1，则MANAGER = 2
console.log(ROLE.ADMIN)
enum ROLE1 {
  USER="1",
  ADMIN=3,
  MANAGER
}
// 常量枚举不会编译生成对象
const enum ROLE2 {
  USER="1"
}

// null undefined 是任何类型的子类型，可以赋值任意一个类型初始化用
// 严格模式下null=>null undefined => undefined
let u:undefined= undefined
let n:null = null
// never void object
// never 无法执行到结尾，比如出错 死循环 走不到的判断 是任何类型的子类型
function setValue(val:string) {
  if(typeof val === 'string') {

  }else {
    // 永远走不到这个判断,自己推断val是never
    val
  }
}
// 出错的函数自己做标识
function throwError():never {
  throw new Error("");
  
}
function whileTrue():never {
  while(true){}
}
// void 表示函数返回值，也可以描述变量，void的值只能赋予null undefined,严格模式不能把null赋值给void
function getVoid():void {
  return undefined
}
// object 泛型约束大量使用object类型
function create(obj:object) {}
//  Symbol BigInt js类型用的不多
let s1:symbol = Symbol(1)
let max = Number.MAX_SAFE_INTEGER
console.log(BigInt(max) + BigInt(1)=== BigInt(max) + BigInt(2))
// 数字 字符串 布尔 数组 元组 any never void null undefined 枚举

