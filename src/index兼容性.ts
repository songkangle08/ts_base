// ts中的兼容性，我们希望类型可以相互赋值

// 普通类型 接口，函数，类

// 1. 基础类型的兼容性 默认情况下都是定义好类型后不能赋值给其他类型了
type NumberOrStr = number | string;
let numberOrStr:NumberOrStr = 'abc';        // | 表示大的类型， 子类型 -》 父类型

// 检测方式 鸭子检测 只要叫声像鸭子就是鸭子
type MyStr = {toString():string}
let str:MyStr = {toString:()=>'xx'}
let str1:MyStr = 'hello'  // 多的条件可以赋予少的条件，一切都是为了安全


interface Ivegetables {
    color: string,
    taste: string
    size?:string
}
interface ITomato {
    color: string,
    taste: string
    size?:string
}

let tomato:Ivegetables = {  // 将一个值赋予给了类型
    color: 'red',
    taste: 'sweet',
    size: 'big'
}




// 4. 针对参数的类型做兼容性处理
// 逆变 和 协变 函数的参数都是逆变的可以传父类，函数的返回值是协遍的可以返回子类
// 传逆父 返协子

class Par {
    constructor(parameters) {
        
    }
}



// 函数的参数是联合类型的时候
function getType(cb:(val:string|number)=>string){
    cb('112')
}
getType((val:string|number|boolean)=>{  // 
    return ''
})