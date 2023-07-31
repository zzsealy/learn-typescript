interface Person {
    name: string,
    age: number
}

let tom: Person = {
    name: 'Tom',
    age: 25,
}

//  可选属性 age是可选属性 可是还是不允许添加未定义的属性
interface IPerson {
    name: string,
    age?: number
}

let iTom: IPerson = {
    name: 'Tom'
}

// 允许一个接口有未定义的属性
interface IIPerson {
    name: string;
    age?: number;
    [propName: string]: string | number| undefined;
}

let IItom: IIPerson = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

// 只读属性
interface IIIPerson {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let IIItom: IIIPerson = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

// IIItom.id = 9527; 这样设置会报错 因为是只读属性