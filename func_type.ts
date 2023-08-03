
// 用接口的形式定义函数

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

// 可选参数 和python一样 可选参数必须在必选参数后面
function buildName(firstName: string, lastName?: string) {
    console.log(lastName)
    if (lastName){
        return firstName + ' ' + lastName
    }
    else {
        return firstName
    }
}

buildName('big', 'name')
buildName('big')