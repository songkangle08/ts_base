// 类,最早都是用构造函数类替代的 -》es6类的概念，es6类编译最后编译成function

// 实例属性，方法， new xxx来调用
// 静态属性，方法  通过类来调用
// 原型属性和方法

/*
class Pointer{
    // x!:number;   // 声明的变量会被增加到实例上
    // y!:number;      // 使用时必须赋值类型
    x:number = 1;
    y:number = 2;

    // 此函数中依然可以使用 剩余运算符 可选参数  默认参数
    constructor(x:number,y:number){     // 在constructor中的操作都是初始化操作
        // this.x = x;
        // this.y = y;  // 这里是赋值
    }
}
*/
class Pointer{
    /*
        public x:number;
        public y:number;

        // 此函数中依然可以使用 剩余运算符 可选参数  默认参数
        constructor(x:number,y:number){     // 在constructor中的操作都是初始化操作
            this.x = x;
            this.y = y;  // 这里是赋值
        }
    */

    // 传入的实例直接就放在实际上，无需再次声明。
    constructor(public x:number,public y:number){     // 在constructor中的操作都是初始化操作
        this.x = x;
        this.y = y;  // 这里是赋值
    }
}
let pointer = new Pointer(100,100);
console.log(pointer.x,pointer.y)
// public 修饰符   public 表示自己和子类， 和子类以外的都可以访问到
// protected      受保护的，只有自己和后辈能访问
// private        就是只有自己能访问的属性

// 我们可以给构造函数添加修饰符，如果标识成protected说明不能被new了，如果表示成private，说明不能继承了，同时也不能new

// readonly 仅读（const） 如果在初始化完毕后不能在修改了。如果是对象可以更改属性


class Animal{
    // private constructor(public name:string,public age:number)
    // protected constructor(public name:string,public age:number)
    public readonly n:number = 1;
    constructor(public name:string,public age:number){
        this.n = 200;
        this.n = 100;
    }
    getName(){
        this.name;
    }
    static type = '哺乳动物'; // 静态属性 es7语法
    // static get type(){
    //     return '哺乳动物';      // 属性访问器，es6的写法
    // }
    static getName(){
        return '动物'
    }
}
// 静态方法可以被继承
console.log(Animal.type,Animal.getName());
class Cat extends Animal{
    constructor(name:string,age:number,public readonly address:string){
        super(name,age);        // Animal.call(this,name,age)
    }
    static type = '猫科动物'; 
    static getName(){
        super.getName(); // super 默认在构造函数中和静态方法中指向自己的父类
        return '猫'
    }
    say(){  // say为原型的方法
        // super   原型方法中的super指向的是父类的原型
    }
    aaaa= 1;  // es7语法 ts不建议使用，会作为实例方法
    private str:string = '111';
    // 属性访问器可以访问私有属性
    get content(){
        return this.str
    }
    set content(newVal:string){
        this.str = newVal
    }
}
// 
console.log(Cat.type,Cat.getName());
let cat = new Cat('Tom',8,'美国');
console.log(cat);








export {};