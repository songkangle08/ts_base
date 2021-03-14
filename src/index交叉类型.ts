// 交叉类型 = 交集（和数学中的有点差异）

interface Person1{
    handsome: string
    // a: string   如果两个类型不一致，则相交的结果是never
}
interface Person2{
    height: string
    // a: number
}

type Person3 = Person1 & Person2;  // |(并集) &(交集)

let person:Person3 = {
    handsome: '帅',
    height: '高'
}

// 交叉类型可以不生成一个新的类型，作为临时类型来使用。


// 方法的mixin 默认推断会生成交流
function mixin<T extends object,K extends object>(o1:T,o2:K):T&K{
    return {...o1,...o2};
}
let r = mixin({name:'zf',age:10},{address:'xxx',name: 0})
r.name
export {};