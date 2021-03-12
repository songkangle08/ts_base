// 函数 对函数增加类型  

/*
    对函数的参数进行类型校验，
    对函数的返回值进行校验，
    也可以对函数本身进行来校验
*/

// 函数关键字 写完后会对当前函数 自动推断类型
// function sum(x: string, y: string): string
function sum1(x:string,y:string):string{        // 函数括号后面的是返回值类型
    return x + y + ''
}
sum1('1','2');


// const sum2: (x: number, y: number) => number 
// 
// 1. 我们可以指定类型 赋予一个兼容这个这个类型的函数
type IFn = (x:number,y:number)=>number;
const sum2:IFn = (x:number,y:number):number => { // 我发现这个函数兼容指定的类型，即可赋值
    return x + y
}
// 2. 可以自动根据当前等号右边的内容 推断左边的类型
const sum3 = (x:number,y:number):number => { // 我发现这个函数兼容指定的类型，即可赋值
    return x + y
}
sum2(1,2);



// js里面支持的方法全部支持
// (x:number,y?:number)     标识来问号，表示参数可传可不传，但是y的类型可以是number ｜ undefined
// (x:number,y:number | undefined)  必须传 y可能是number ｜ undefined

// js中默认值和可选参数不能一切使用
// 默认值用 = 号
const sum33 = (x:number,y?:number,...args:any[]):number =>{
    return x+y!;
    // return x + (y as number)
}
sum33(1,1,3,3,3);



// 函数重载
// 123 => [1,2,3];
// 'abc' => ['a','b','c'];
function toArray(value:number|string): number[] | string[]{
    if(typeof value == 'string'){
        return value.split('');
    }else{
        return value.toString().split('').map(item=>Number(item));
    }
}


// 重载方法在真实方法的上面
function toArray1(val:string):string[]
function toArray1(val:number):number[]
function toArray1(val:string|number){
    if(typeof val == 'string'){
        return val.split('');
    }else{
        return val.toString().split('').map(item=>Number(item));
    }
}
// ts为来安全， 为来更好的提示
let r = toArray1('abc');


export {};

