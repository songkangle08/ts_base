// 泛型的用处在于当我们调用的时候确定类型，而不是一开始就写好类型，类型不确定，只有在执行的时候才能确定
// 方便确定不确定的类型


// 1. 一个泛型
// 声明的时候需要用<>包裹起来，传值的时候也需要。
function createArray<T>(times:number,value:T){ // 根据对应参数的类型给T赋值
    let result = [];
    for(let i = 0;i<times;i++){
        result.push(value);
    }
    return result;
}
let r = createArray<string>(5,'abc')



interface ICreateArray{
    // interface后面的类型和函数前面的类型的区别
    // 如果放在函数千，表示使用函数的时候确定的类型
    // 如果放在接口的后面，表示是使用接口的时候确定类型
    <T>(times:number,value:T): IMyArr<T>   
}

interface IMyArr<T>{
    [key:number]: T
}

// type ICreateArray =  <T>(times:number,value:T)=>Array<T>; // 如果泛型不传参是unkown类型
const createArray1:ICreateArray = <T>(times:number,value:T):IMyArr<T>=>{
    let result = [];
    for(let i = 0;i<times;i++){
        result.push(value);
    }
    return result;
}
let z = createArray1(5,'1')




// const swap = (tuple:[string,number]):[number,string] =>{
//     return [tuple[1],tuple[0]]
// }

// 多个泛型
const swap = <T,K>(tuple:[T,K]):[K,T] =>{
    return [tuple[1],tuple[0]]
}

let r1 = swap<string,boolean>(['abc',true]);  // => [123,'abc'] 我能确定只有两项



// 3. 泛型约束， 只有强调类型中必须包含某个属性
// const sum = <T extends string>(a:T,b:T): T=> { // 约束对象
//     return (a + b) as T
// }
// sum('a','b')


// [1,2,3] [4,5,6]

// type withLen = {length:number}
interface withLen{
    length:number
}
const conmputedArray = <T extends withLen,K extends withLen>(arr1:T,arr2:K):number =>{
    return arr1.length + arr2.length
}

conmputedArray([1,2,3],{length:3})


// keyof相当于是T[key]
const getVal = <T extends object,K extends keyof T>(obj:T,key:K) => {

}
// getVal({a:1,b:2},'c')
getVal({a:1,b:2},'b')













export {};