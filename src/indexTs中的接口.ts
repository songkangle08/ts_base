// interface 接口： 描述对象的形状和结构，可以给数据增添类型，而且方便复用
// type的方式，通过别名来重新定义类型

// interface 可以贝被类实现和继承 ，type没有功能
// type 可以使用联合类型 interface不能使用联合类型



// 1）如何用接口描述对象类型，如果有联合类型，就使用type
// type IObj = { name:string,age:number };
// type IObj = { name:string,age:number } | string;
interface IObj {
    name:string,
    age:number 
} // 接口不支持联合类型
const getObj = (obj:IObj)=>{
    // obj.
    // (obj as string).toString();
}
getObj({name:'zf',age:12})

// 2）描述函数类型
interface ISum {
    (a:string,b:string):string
}
// type ISum = (a:string,b:string)=>string
const sum:(a:string,b:string)=>string = (a:string,b:string):string =>{
    return a+b;
}
const sum1 :ISum = (a:string,b:string):string =>{
    return a+b;
}
// const sum1 : ISum = (a,b) =>{
//     return a+b;
// }

// 3). 我希望写个计数器的例子，每次调用函数就累加1
interface ICount{  // 接口中的混合类型
    ():number,      // 函数
    count: number
}
const fn:ICount = (() => {  // 函数返回函数，我一般要标识函数的返回类型
    return fn.count++
}) as ICount;
fn.count = 0
console.log(fn());
console.log(fn());


// interface IEffect{
//     ():void,
//     id:number
// }
// function effect(fn:Function){
//     const reactiveEffect = createReactiveEffect(fn);
// }
// function createReactiveEffect(fn:Function):IEffect{
//     const effect = function reactiveEffect(){

//     }
//     effect.id = 1;
//     return effect;
// }



// 4) .接口的特性
// interface IVegetables{
//     color: string,
//     taste: string,
// }
//  1 直接断言，断言后就可以使用，（断言的时候要保证接口中的限制数据必须要有）
// const tomato:IVegetables = {
//     color: 'red',
//     taste: 'sweet',
//     size: 'big'     // 用兼容处理
// } as IVegetables

// 2. 接口同名会合并，会改变原来有的接口
// interface IVegetables{ 
//     size: string
// }
// const tomato:IVegetables = {
//     color: 'red',
//     taste: 'sweet',
//     size: 'big'     // 用兼容处理
// }


// 3.我单独写一个tomato接口，继承蔬菜接口
// interface ITomato extends IVegetables{  // 接口的继承，ts里面的
//     size: string
// }
// const tomato:ITomato = {
//     color: 'red',
//     taste: 'sweet',
//     size: 'big'     // 用兼容处理
// }


// 4）.可选属性，可以通过？来实现
interface IVegetables{
    color: string,
    taste: string,
    // size?: string,
    // id?:number
    [key:string]: any  // 任意接口，可多选  （对象的key基本上都是字符串）
}
const tomato:IVegetables = {
    color: 'red',
    taste: 'sweet',
    id: 1,
    1: 1
}


// 5）.可索引接口
interface ILikeArray{
    [key:number]:any
}
let arr: ILikeArray = [1,2,3];
let arr1: ILikeArray = {1:1,2:2}

// 可能我的代码里，用不到这个size，还要手动删掉？
tomato.size



// 把一个对象赋值给一个接口，要满足接口中所有的属性
// 如果多出来的属性，可采用 断言，可选，任意接口


type MyType = {key:string,value:string}
// 接口中的类型，可以通过类型别名的方式拿出来，但是只能用[]
interface XXX{
    n: MyType[]
}
interface IArr{
    arr: MyType[],
    a:{
        n: MyType[]
    },
    xxx: XXX
}
type My = IArr['a']['n']



// (6). 接口的实现，接口可以被类来实现,接口中的方法都是抽象（没有具体实现）的
interface ISpeakable{
    name: string,
    // 用接口来形容类的时候，void表示不关心返回值/**/
    speak(): void   // 描述当前实例上的方法，或者原型的方法
}
interface IChinsesSpeakable{
    speakChinese():void
}
class Speak implements ISpeakable,IChinsesSpeakable{ // 类本身需要实现接口中的方法
    name!: string;
    // speak:()=>void;
    constructor(){
        // this.speak = function(){

        // }
    }
    speak():string{
        return 'xxx'
    }
    speakChinese():void{

    }
}
let s = new Speak();
s.name = 'xxx';



// 7. 抽象类（不能被new）,可以被继承
abstract class Animal {  // 只有类被标记成abstract，属性才可以描述成abstract
    abstract name: string  // 没有具体实现，需要子类实现
    eat(){
        console.log("eat")
    }
    abstract drink():void
}
class Cat extends Animal{
    drink():void{
        console.log('drink')
    }
    eat(){  //子类重写父类的方法

    }
    name!:string
}
new Cat();

/*
    abstract 和 implements的区别
    abstract可以有具体的方法，也可以有抽象的方法，不能被new
    implements，类都要实现接口中的方法，都是抽象的方法，不能被new
*/ 


// 8. 可以用接口来描述实例
// let instance:Person;
// type IPerson = new (name:string)=>Person
interface Iperson<T>{
    new (name:string): T
}
// function createInstance(clazz: { new (name:string)=>Person},name)
function createInstance<T>(clazz: Iperson<T>,name){
    // if(instance) return instance;
    return new clazz(name);
}
class Person{
    constructor(public name:string){}
}
class Dog {
    constructor(parameters) {
        
    }
}
// 泛型就是只有当使用的时候才能确定类型，通过参数传入类型
let r = createInstance<Person>(Person,'张三')       // 类可以充当类型，可以描述实例


// 接口的默认功能是规范类型的


// new () 表示Person类
// :T 表示返回值的类型，这个类型是Person的实例


export {}
