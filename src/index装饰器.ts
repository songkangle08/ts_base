// 装饰器 是一个实验室的语法 后面可能会有改动

// 装饰器的作用， 扩展类，扩展类中的属性和方法; 不能修饰函数，因为函数有变量提升的问题

function addSay1(value:string){
    console.log(value)
    return function(target:any){
        console.log(1)
    }
}
function addSay2(value:string){
    console.log(value)
    return function(target:any){
        console.log(2)
    }
}
function addSay3(value:string){
    console.log(value)
    return function(target:any){
        console.log(3)
    }
}

// 传参数，相当于洋葱模型
// @addSay1('a1')  // => addSay(Person);      // 指向
// @addSay2('a2') 
// @addSay3('a3')  // 从后往前执行


function eat(target:any){
    // target指定是类
    target.prototype.eat = function(){
        console.log('eat');
    }
}

function toUpperCase(target:any,key:string,){  // key就是修饰的属性
    // 这里的targer是原型
    let value:string = ''
    Object.defineProperty(target,key,{ // 给原型定义属性
        get(){
            return value.toUpperCase();
        },
        set(newValue){
            console.log(newValue)
            value = newValue
        }
    })
}


function double(num:number){
    return function(target:any,key:string){ // target => 类
        let v = target[key];
        Object.defineProperty(target,key,{
            get(){
                return num * v;
            },
            set(){
                
            }
        })
    }
}

function Enum(isEnmu:boolean){
    return function(target:any,key:any,descriptor:PropertyDescriptor){
        console.log(descriptor.enumerable = false);
    }
}

function params(target:any,key:string,index:number){  // target原型  key=》drink  index=》参数的所以
    console.log(target,key,index)
}

// @eat
class Person{
    // eat!:()=>void;      // !表示非空
    @toUpperCase   // this.name = 'xxx'
    public name:string = 'haha';


    @double(2)
    static age: number = 18;

    @Enum(false)
    // 修饰参数
    drink(@params content){

    }

}
let p = new Person();
// console.log(p.eat());
console.log(p)

// addSay3(addSay2(addSay1(Person)))

