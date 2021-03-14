// ts中其他的内置类型，根据定义好已有的类型，演变出一些其他类型
interface ICompany{
    name: string,
    address: string
}
interface IPerson{
    name?: string,
    age: number,
    company: ICompany
}

// 
type Partial<T> = {
    [K in keyof T]? : T[K] extends object ? Partial<T[K]> : T[K]
}
// Partial：表示选项可以是选填的，单层可选，深度递归，默认不是深度帝国
type MyPerson = Partial<IPerson>;
let person:MyPerson = {
    company:{
        address: ''
    }
}
// 递归的数，就是一个接口的递归



// Required
type Required<T> = { [K in keyof T]-?:  T[K]}
type MyRequired = Required<MyPerson>


// Readonly
type Readonly<T> = { readonly [K in keyof T]:  T[K]}
type MyReadonly = Readonly<IPerson>


// Pick 精挑细选（对象里选属性）   extract 抽离可用的（类型中选择类型）
type Pick<T,K extends keyof T> = {[X in K]:T[X]};  // 挑选属性
type MyPick = Pick<IPerson,'age' | 'company'> 


// 5. Omit 忽略属性 两个对象的合并，可能会出现never T&K
// type Omit<T,K extends keyof any> = Pick<T,Exclude<keyof T,K>>
type MyType = Omit<IPerson,'name'> & {name:string};
let t:MyType = {
    name: 'string',
    age: 19,
    company: {
        name: '',
        address: ''
    }
}

// 6. Record类型 ，一般描述对象
let obj:Record<string,any> = {a:1,b:2};

function map<K extends keyof any ,V,X>(obj:Record<K,V>,cb:(item:V,key:K)=>X):Record<K,X>{
    let result = {} as Record<K,X>;
    for(let key in obj){
        result[key] = cb(obj[key],key)
    }
    return result;
}
// map方法 map可用一个对象映射成一个新对象{name:'zf',age:12} => name:'$zf',age:'$12'
map({name:'zf',age:12},(item,key)=>{
    return '$'+item
})





export {};