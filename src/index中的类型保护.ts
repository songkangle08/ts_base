// 类型保护 主要靠js的特性

// 1. typeof 区分类型来保护变量
function fn(val:string | number){
    if(typeof val == 'string'){
        // val.
    }else{

    }
}

// 2. instanceof 
class Person {
    constructor() {
        
    }
}
class Dog {
    constructor() {
        
    }
    eat(){

    }
}
const createClass = (clazz:new ()=>Person | Dog)=>{
    return new clazz
}
let r = createClass(Person)
if(r instanceof Person){
    // r.
}else{
    r.eat
}


// 3. in 语法
interface Fish{
    swiming: string
}
interface Bird{
    fly: string
}
function getAnimalType(animal:Fish | Bird){ // keyof 取的是类型
    if('swiming' in animal){
        animal.swiming
    }else{
        animal.fly
    }
}


// 以上的情况都是通过js来判断出来的，可以增加一个字面量类型来进行判断，可识别类型
interface IButton1{
    color: 'blue',
    class: string
}
interface IButton2{
    color: 'green',
    class: string
}
let IButton1!:IButton1;
let IButton2!:IButton2;
function getButton(button:IButton1 | IButton2){
    if(button.color == 'blue'){
        // button1
    }else{
        // button2
    }
}


// is语法 用来定义自己的类型  val is string 确定类型
function isString(val:any): val is string{
    // ts是代码的， js是自己的逻辑，ts不关心，ts只关心类型
    return Object.prototype.toString.call(val) == '[object String]';
}
let str = 1;
if(isString(str)){
    str
}  


// null保护  val!==null  ! ? 都可以
function getNum(val:number | null){
    val = val || 3;
    val.toFixed  // 明确处理是数字


    function inner(){
        val.toFixed
    }
    inner()

}
getNum(3)




// 代码的完整保护性 主要靠的是never 利用never无法到达最终结果的特性，来保证代码的完整性
interface ISquare{
    kind: 'square',
    width: number
}
interface IRant{
    kind: 'rant',
    width: number,
    height: number
}
interface ICircle{
    kind: 'circle',
    r: number
}

const asserts = (obj:never) => {throw new Error('err');}
// 完整性保护，保证代码逻辑全部覆盖到
function getArea(obj:ISquare | IRant | ICircle){
    switch(obj.kind){
        case 'square':
            return obj.width * obj.width;
            break
        case 'rant':
            return obj.width * obj.height;
            break
        case 'circle':
            return
        default:
            asserts(obj)
    }
}
getArea({kind:'circle',r:10})

// typeof instanceof in （ts 可识别类型 is语法 完整性保护 null保护）



export {}