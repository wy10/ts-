// interface 描述对象的形状和结构，可以给数据增添类型而且方便复用
// type 通过别名来重新定义类型
// interface 可以被类实现和继承，type没有
// type可使用联合类型,interface不能使用联合类型

// 如何使用接口描述对象,下面两种情况没有差别
// type IObj = {name:string,age:number}
// const getObj = (obj:IObj) =>{}
interface IObj {
  name:string,
  age:number
}
const getObj = (obj:IObj) =>{}
getObj({name:'zf',age:12})

// 描述函数
interface ISum {
  (a:string,b:string):string
}
// type ISum = (a:string,b:string) => string
const sum:ISum = (a,b)=>a+b

// 计数器,每次调用函数计数器累加1
// 函数返回number,且函数有一个count属性
interface ICount {
  ():number,
  count:number
}

// 如果不写as 会报错
const fn:ICount = (()=>{
  return fn.count++
})as ICount

// 接口最终是用来描述对象结构的
interface IVegetables {
  color:string,
  taste:string,
  // size?:any,推荐这种的可选属性
  [xxx:string]:any  //可多填任意属性
}

// 接口合并,不安全
interface IVegetables {
  size:string
}

// 接口继承
interface ITomato extends IVegetables {
  size:string
}
// 断言太暴力拿不到size属性不可取,只能断言已经存在的属性
const tomato:IVegetables = {
  color:'red',
  taste:'sweet',
  size:'big'
} as IVegetables

// 断言太暴力拿不到size属性不可取
const tomato1:IVegetables = {
  color:'red',
  taste:'sweet',
  size:'big',
  id:1
} 
console.log(tomato1.id)

// 可索引接口
interface ILikeArray {
  [key:number]:any
}
let arr3:ILikeArray = [1,23]
let arr4:ILikeArray = {1:1}

// 接口和type组合,但是只能用[]
type MyType={key:string,value:string}
interface Ixx {
  arr:MyType[]
}

let obj:Ixx = {
  arr:[{key:"1223",value:"12323"}]
}

// 接口可以被类实现,接口中的方法都是抽象的,没有具体实现,只是定义类型
interface ISpeakable {
  readonly name:string,
  speak():void
}

interface IChinese {
  speakChinese():void
}
class Speak implements ISpeakable,IChinese {
  speakChinese(): void {
    throw new Error("Method not implemented.")
  }
  name!: string
  speak(): void {
    throw new Error("Method not implemented.")
  }
}

// 抽象类 才能有抽象属性,只能被继承不能被new
abstract class Animal1 {
  abstract name:string
  eat() {

  }
}

class Cat2 extends Animal1 {
  name!: string
  eat(){
    
  }
}

let instance:Person1
interface IPerson {
  new (name:string):Person1
}
// type Iperson = new (name:string)=>Person1
class Person1 {
  constructor(public name:string) {
    this.name = name
  }
}
function createInstance(clazz:IPerson,name:string) {
  if(instance) return instance
  return instance = new clazz(name)
}
