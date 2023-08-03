// 用接口的形式定义函数
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
// 可选参数
function buildName(firstName, lastName) {
    console.log(lastName);
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
buildName('big', 'name');
buildName('big');
