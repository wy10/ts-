// 泛型就是只有当使用的时候才能确定类型,通过参数传入类型,只有在执行的时候确定类型
interface IPerson<T> { //泛型放在函数前,表示使用函数的时候确定类型,放在接口后面表示使用接口的时候确定类型
  new (name:string):T
}

class Person2 {
  constructor(public name:string) {
    this.name = name
  }
}
class Dog {
  constructor(public name:string) {
    this.name = name
  } 
  drink() {}
}
function createInstance<T>(clazz:IPerson<T>,name:string) {
  // if(instance) return instance
  return new clazz(name)
}

let d = createInstance(Dog,"a")
d.drink()

function createArray<T>(time:number,value:T) {
  let result = []
  for(let i = 0; i < time; i++) {
    result.push(value)
  }
  return result
}
let arr5 = createArray(5,"1")

// 元组进行类型交换
const swap = <T,K>(tuple:[T,K]):[K,T] =>{
  return [tuple[1],tuple[0]]
}
let  result = swap([1,'2'])

// 约束 主要强调类型中必须包含某个属性
const sum1 = <T extends string>(a:T,b:T) =>{
  return (a+b) as T
}
type withLen = {length:number}
const computeArrLength = <T extends withLen,K extends withLen>(arr1:T,arr2:K):number =>{
  return arr1.length + arr2.length
}
computeArrLength([1,2,3],{length:3})

const getVal = <T extends object,K extends keyof T>(obj:T,key:K) =>{
  return obj[key]
}
getVal({a:1,b:2},'a')



type getArr<T1 extends number,U extends any[]= []> = U["length"] extends T1 ? U : getArr<T1,[...U,any]>

type Add<T1 extends number,T2 extends number> = [
  ...getArr<T1>,
  ...getArr<T2>,
]

type a = Add<3,2>













