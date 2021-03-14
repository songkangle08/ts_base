// ts中的条件类型  满足某个条件给一个类型，不满足给另一个类型

interface Fish{
    name: string,
    type: '鱼'
}
interface Bird{
    name: string,
    type: '鸟'
}

interface Swimming{
    swimming:string
}
interface Sky{
    sky: string
}
// 三元表达式，如果你传入的是一个联合类型，他会进行条件的分发， Fish extends Bird ｜ Fish extends Fish 
type MyType<T> = T extends Bird ? Sky : Swimming; 

type B = Fish | Bird;

// type IEnv = MyType<Fish & Bird>; // 这个类型不具备分发的功能

type IEnv = MyType<Fish & Bird>; // 实现分发是联合类型


// 如果用户传递了name属性，就必须传递age
// 其他情况下 用户只传递age
interface ISchool1{
    name: string,
    age: number
}
interface ISchool2{
    age?: number,
    size: string
}
type School<T> = T extends {name:string} ? ISchool1 : ISchool2
type MySchool = School<ISchool2>

let s:MySchool = {
    // name: 'zzz',
    age: 1,
    size  : ''
}



// ts中内置的类型 内置类型包含条件的情况 （内部用条件来实现）Exclude
type Exclude<T,K> = T extends K ? never :  T; // 在多个类型中排除某几个
type MyExclude = Exclude<string | number | boolean,boolean>;


// Extract： 多个属性中，抽离某几个
type Extract<T,K> = T extends K ? T : never;
type MyExtract = Extract<string | number | boolean,boolean>;

// 在多个类型中排除null类型
type NonNullable<T> = T extends null | undefined ? never :  T;  // 在多个类型中排除某几个 
type MyNonNullable = NonNullable<string | number | null | undefined>



// ------- infer 推断 ----------
// 获取函数的返回值类型, infer放在哪里就是推断哪里的结果
function getSchool(x:number,y:number){
    return {name:'zf',age:12}
}
// let r = getSchool()
// type t = typeof r;
// infer要配合extends关键字 否则无法使用， infer有推断类型的功能 可以自动推断出结果
//(...args:any[])=>any相当于是一个函数
type ReturnType<T extends (...args:any[])=>any> = T extends ((...args:any[])=>infer R) ? R : any;
type MyReturnType = ReturnType<typeof getSchool>

type Parameters<T extends (...args:any[])=>any> = T extends (...args: infer P)=>any ? P : any;
type xxx = Parameters<typeof getSchool>


let a:MyReturnType = {
    name: '',
    age: 12
}


class Person {
    constructor(name:string) {}
}
type ConstructorParameters<T extends new (...args:any[])=> any> = T extends new  (...args:infer CP)=> any ? CP : any
type MyConstructorParameters = ConstructorParameters<typeof Person>




export {}