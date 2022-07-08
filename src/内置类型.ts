// 联合类型 如果不进行初始化必须要给类型，否则就是any
let numOrStr:string | number;
// 默认联合类型在没有确定类型之前只能调用两个类型共有的方法 比如numOrStr.toString()而不能调用数字单有或者string单有的方法
// 在变量确定类型之后可以设置对应的方法
numOrStr = 123
// 使用联合类型的场景，取值
const ele: HTMLElement | null = document.getElementById("app")
// 断言，我断定这个是HTMLElement类型
ele!.innerHTML  = "哈哈哈"
// 强转某个类型,强转要求必须联合类型中又才行
let a:string | number |undefined
(<string>a).indexOf("")
// 最好的强转类型使用
let b:string | number |undefined
(b as number).toFixed(2)
// 链判断运算符
const ele1: HTMLElement | null = document.getElementById("app")
// ele1?有值就取innerHTMl否则时undefined
ele1?.innerHTML
// ?? 如果??前面的不是null或者undefined就返回前面的否则返回??后面的
// 字面量类型 类型的内容是固定枚举
// 如果类型过于复杂，我希望后续复用，我们可以把类型单独提取出来
type IType = '301' | '302' | '400' | '500'
let type:IType = '500' 

