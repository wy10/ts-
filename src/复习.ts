// 标类型的时候我们一般以小写为主比如number,大写表示是类
// 元组是特殊的数组，元组的参数类型和长度是规定好的并且一一匹配，但因为是数组的缘故，我们可以调用pop,push
// 最常用的枚举就是常量枚举
// number string boolean null undefined void never 数组 元组 枚举
// 联合类型、字面量、函数（重载）、类（装饰器这个后续回删掉）如果给this赋予值是无法推断的，this上的属性无法知道
// type,接口是规范类型的，比如在函数传参的时候函数的参数就会丢失类型type ISschool = typeof school 类型反推，根据代码推导出一个类型
// 接口：限制函数（混合类型函数中有函数的属性）接口可以被继承，接口可以被类实现
// 添加一个export {}会避免变量重复声明问题

// import 解决了文件复用，继承解决了代码复用，泛型解决了算法复用

// ts 的核心原则之一是对值所具有的结构进行类型检查，它有时被称作鸭式辨型法或结构性子类型化，在ts里接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约


type ChildNode = {
    title: string,
    id:number,
    // children?:ChildNode
    children?:Array<ChildNode>
}

const B:ChildNode={
    title: "",
    id:1,
    children:[{
        title: "",
        id:1,
        children:[{
            title: "",
            id:1,
        }]
    }]
}

type Tree<T> = {
    // [P in keyof T]: T[P] extends ChildNode ? Tree<T[P]>:T[P] 
    [P in keyof T]: T[P] extends Array<ChildNode> ? Tree<T[P][0]>:T[P] 
}

// const tree:Tree<ChildNode> = {
//     title:'title',
//     id:1,
//     children:{
//         title:'title',
//         id:1,
//         children:{
//             title:'title',
//             id:1,
//             children:{
//                 title:'title',
//                 id:1,
//             } 
//         }
//     }
// }

type A = {
    id:number
}
type B = {
    name:string
}

type C = A | B
type D = A & B

const c1:C = {
    id:1
}
const d1:D = {
    id:1,
    name:''
}


const tree:Tree<ChildNode> = {
    title:'title',
    id:1,
    children:[
        {
            title:'title',
            id:1,
            children:[
                {
                    title:'title',
                    id:1,
                    children:[{
                        title:'title',
                        id:1,
                    }]
                       
                }
               
            ]
        }
       
    ]
}


export default{}