// ts 1.为了安全：类型校验 2.为了代码提示
type Ifn = (x:number, y:number) => number
const sum2: Ifn = (x, y) =>{
  return x + y
}
// 默认值和可选参数不能一起使用
const sum3 = (x:number,y?:number): number =>{
  // 处理数字和undefined相加,逻辑上还是有问题 加出来是nan
  return x + (y as number)
}
console.log(sum3(1))
const sum4 = (x:number, y?:number, ...args:number[]) =>{
  console.log(args)
  return x + (y as number)
}
console.log(sum4(0,1,2,3,4))

//函数重载 sum3最后处理的还是有问题,重载方法在真实方法上面
// 一个方法，根据参数的不同实现不同的功能，ts目的就是根据不同的参数返回类型
function toArray(value:number):number[]
function toArray(value:string):string[]
function toArray(value:number | string){
  if(typeof value === 'string') {
    return value.split('')
  }else {
    return value.toString().split('').map(item=>Number(item))
  }
}
let r = toArray(123)