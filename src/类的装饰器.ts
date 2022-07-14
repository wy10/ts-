// 装饰器的作用就是扩展类中的属性和方法
function addSay1(val:string) {
  console.log(val)
  return function (target:any) {
    console.log("2")
  }
}
function addSay2(val:string) {
  console.log(val)
  return function (target:any) {
    console.log("1")
  }
}
function eat(target:any) {
  target.prototype.eat = function () {
    console.log("eat")
  }
}
// 修饰类中的属性,key为装饰的属性 构造函数的属性和方法都是放在原型上面的
// 这里的target 指的是Person函数的原型对象
function toUpperCase(target:any,key:string) {
  // 当执行装饰器的时候，属性还没有赋值
  let val:string = ""
  Object.defineProperty(target,key,{
    get() {
      return val.toUpperCase()
    },
    set(newValue:string) {
      val = newValue
    }
  })
}
// 修饰静态属性
function double(num:number) {
  return function (target:any,key:string) {
    let v = target[key]
    Object.defineProperty(target,key,{
      get() {
        return num * v
      }
    })
  }
}
// 修饰方法
function Enum(x:boolean) {
  // 这里的target指的是Person函数的原型
  return function (target:any,key:string,descriptor:PropertyDescriptor) {
    descriptor.enumerable = x
  }
}
// 修饰函数参数
function params(target:any,key:string,index:number) {
  
}
// addSay(addSay1(Person)) 洋葱模型 打印a1,a1,1,2
@addSay1("a1")
@addSay2("a2")
@eat
class Person {
  // 方法是在函数的原型对象上 Person.prototype.eat
  eat!:()=>void
  @toUpperCase
  // 属性是在函数的原型对象的constructor中 Person.prototype.constructor.address
  public address:string="ahahfbaj"
  @double(2)
  // 静态属性是在函数的原型对象上  Person.prototype.age
  static age:number = 18
  // 访问器属性是在函数原型对象上
  get getAge():number {
    return 12
  }
  constructor(public name:string) {
    
  }
  @Enum(false)
  drink(@params content:any){}
}
let p = new Person("hahaha")
p.eat()
console.log(p.address,Person.age)