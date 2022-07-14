// 类最早都是用构造函数来替代的 -》es6的概念
// 实例属性，方法，静态属性，方法，原型属性和方法
class Pointer {
  public x:number  // public 是属性修饰符
  public y:number   //声明之后会被增加到实例
  // 此函数中仍然可以使用剩余运算符，可选参数，默认参数
  constructor(x:number,y:number) {
    this.x = x;
    this.y = y;
  }
}

let pointer = new Pointer(100,100)
console.log(pointer) 
// 属性修饰符 constructor 也可以加修饰符
// public 自己和子类里面和类之外都可以访问
// private 只有自己的类里面可以访问
// protected 只有自己的类里面和后辈类里面可以访问
// readonly 只读（const 声明变量） 
// 静态属性方法 类调用
class Animal {
  public readonly n:number=1
  static type = "哺乳动物" // 静态属性 es7语法
  // static get type(){ //属性访问器 es6语法
  //   return '哺乳动物'
  // }
  // 静态方法可以被继承
  static getType() {
    return '哺乳动物'
  }
  constructor(public name:string, public age:number) {
    this.name = name
    this.age = age
  }
}
// 属性访问器和方法最大的在于职责不同，方法可以处理逻辑，访问器只用做简单的处理对应属性
class Cat extends Animal {
  constructor(name:string,age:number,public address:string) {
    super(name,age)
    this.address = address
  }
  // 放在原型上的方法
  say() {
    console.log(this.name,this.age)
  }
  private str:string=""
  // 放在原型上的属性
  get getStr(){
    return this.str
  }
  set setStr(val:string) {
    this.str = val
  }
}
let cat = new Cat("猫",1,"新华大道")
console.log(cat.age,cat.address,cat.n,"xxx",Animal.type,Cat.getType())