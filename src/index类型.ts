// ts基础类型

// 最基本的类型 
/*
    数字，字符串，布尔  
    所有的类型都在冒号的后面,ts的核心一切都以安全为准

    什么时候可以不用类型，推到
*/

// number和大Number的区别  js特性
let num:number = 1;
num = 2
let num2:Number = 2; // 用来描述实例的，类也可以当做类型
let num3:number = Number(1);
let num4:Number = new Number(1);
let num5:Object = new Number(2);

let str:string = 'haha';
str = '111';

/*
Type 'String' is not assignable to type 'string'.
  'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.
*/
// let str1:string = new String(1);

let bool:boolean = true;
bool = false;


// 数组类型，数组的概念，一类类型的集合
// 正常的开发中会放在类型一样的
let arr:number[] = [];
let arr1:(number | string)[] = ['a',1];       // 并集的含义

// 如果数组里放的内容就是无规律的,有规律的数组
let arr2:any[] = ['',1,{},true,[]]; // 啥都能放
arr.push()

let arr4:Array<boolean> = [true,false];         // 定义数组的另一种方式


// 元组 ts中自己实现的 内容固定， 类型固定
const tuple:[string,boolean,number] = ['skl',true,26]; // 初始化的时候，必须按照要求填入数据
console.log(tuple[0])
console.log(tuple[1])
console.log(tuple[2])

tuple.push('str');
console.log(tuple)

// 类型“100”不可赋值给类型“undefined”
// tuple[3] = 100;   //Type '100' is not assignable to type 'undefined'，索引最大为3，初始化的时候，可以使用数组的方法。


// 枚举类型 ts最终编译成js，是没有类型的，只是在开发时候使用的
// 普通枚举
enum ROLE {
    USER,
    ADMIN,
    MANAGER
}
/*
ROLE[ROLE["USER"] = 0] = "USER";
ROLE[ROLE["ADMIN"] = 1] = "ADMIN";
ROLE[ROLE["MANAGER"] = 2] = "MANAGER";
{
    0: "USER"
    1: "ADMIN"
    2: "MANAGER"
    ADMIN: 1
    MANAGER: 2
    USER: 0
}
*/
console.log(ROLE)
// 异构枚举
// 枚举可以支持反举，但是限于索引，会根据上一个人的值，进行自动的推断
enum Role {
    USER = 'User',
    ADMIN = 5,
    MANAGER  // 等于6
}
// 常量枚举
const enum Color {      // 加上const后 不会生成一个对象（更简洁）
    USER = 'User',
    ADMIN = 5,
    MANAGER  // 等于6
}
console.log(Color.MANAGER);  //6 


// null,undefined “是任何类型的子类型” 在严格模式下 undefined-> undefined null->null
let number:number = undefined;
let u:undefined = undefined;
let n:null = null;



// never 从不  代表无法达到重点，无法执行到结尾   “是任何类型的子类型”
// 一：代码出错
// 二：死循环
// 三：永远走不到的判断
function setVal(val:string){
    if(typeof val === 'string'){

    }else{
        val  // 帮我们代码做完整校验   走不到else中 val就是never
    }
}

function throwError():never{
    throw new Error();
}
// let xx:string = throwError();

function whileTure():never{
    while (true) {}
}



// void表示函数返回值的：也可以描述变量  void的值只能服务null和undefined
// 严格模式下，不能将null赋值给void类型
function getVoid():void{
    return undefined
}


// object 表示非原始类型
function create(obj:object){      // 后面泛行约束 会大量使用object类型

}
create({});
create(function(){});
create([]);
// create(1)



// Symbol
let s:symbol = Symbol(1);
let s1:symbol = Symbol(1);

// BigInt  js类型 用的不多
let max = Number.MAX_SAFE_INTEGER;
console.log(max + 1 === max+2);

console.log(BigInt(max) + BigInt(1) === BigInt(max)+BigInt(2));

// Any 没有类型校验了



let x = getVoid();


// 联合类型，如果不进行初始化操作，必须要给类型，否则都是any
let numOrStr:string | number;
// 默认联合类型，在没有确定类型之前，只能调用两个类型共同的方法
// 在变量确定类型后，可以设置对应的方法
numOrStr = 'abc';
numOrStr = 123;
// 如果赋予类型后，可以根据上下文自动推断对应类型的方法


// 场景？ 在取值的时候也会遇到联合类型
const ele:HTMLElement | null = document.getElementById('app');
const ele1:HTMLElement = document.getElementById('app')!;
// 方法一
if(ele){
    ele.innerHTML = 'abc';
}
ele && (ele.innerHTML = 'abc');

// 非空断言 表示这个东西一定有值,告诉ts按照我的想法来，如果后续出错我负责。一定不为空
ele!.innerHTML = 'abc';

// as / <> 直接强制某个类型,强制告诉人家，这个类型就是里面的某一个，强转要求必须联合类型中有才行。
(<HTMLElement>ele).innerHTML = '123'


let a:string | number | undefined;
// (<string>a).indexOf('a');  <string>a和jsx语法冲突，所以不建议使用
(a as any) as boolean;  //双重断言，先转化成any，在转换成具体的类型，问题是会导致类型出错


// ?号  aa &&  aa.xxx && aa.xxx.xxx
ele?.style?.color   // 链判断运算符 ?是js中就存在的


// || && | & | ??
false ?? true  // ?? 表示排除null和undefined；


// 字面量类型 类型的内容是固定的
// 如果类型过于复杂，我希望后续复用，我们可以把类型单独提取处理
type IType = 'a' | 'b' | 'c' | 'd';   // 类型别名
let type1:IType = 'b';
let type2:IType = 'c';




// 表示当前模块属于自己的
export {};      // 防止模块间的数据共享



