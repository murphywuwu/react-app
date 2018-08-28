/* 
compose:receive function and return fucntion
params: pure function
*/
const compose = (f, g) => (x => f(g(x)));

const add1 = x => x + 1;
const mul5 = x => x * 5;

// 我们定义的compose就像双面胶一样，可以把任何两个纯函数结合到一起。当然你也可以扩展出组合三个函数的“三面胶”，甚至“四面胶”，“N面胶”
var result = compose(mul5, add1)(2)
console.log('result', result); // 15

const first = arr => arr[0];
const reverse = arr => arr.reverse();

var result = compose(first, reverse)([1, 2, 3, 4, 5])
console.log('result', result) // 5

/* 
声明式:是一个表达式，如何计数器迭代，返回的数组如何收集，这些细节都隐藏了起来，它指明的是做什么，而不是做什么
*/
var CEOs = []
var companies = ['google', 'amazon', 'ali', 'tencent'];
var companies = [
  {
    company: 'google',
    CEO: '拉里佩奇'
  },
  {
    company: 'amazon',
    CEO: '杰夫·贝佐斯'
  },
  {
    company: 'ali',
    CEO: '马云'
  },
  {
    company: 'tencent',
    CEO: '马化腾'
  }
]

// 声明式
var CEOs = companies.map(c=> c.CEO)

// 命令式
for (var i = 0; i < companies.length; i++) {
  CEOs.push(companies[i].CEO)
}
