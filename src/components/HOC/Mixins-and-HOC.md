> 我怎么在不同的几个react组件之间共享code。有两种方法mixin以及高阶函数

### Mixin

1.mixin是什么
是将一个模块混入到另一个模块中或是类。

```
// 在Ruby中，include关键词即是mixin
module D
  def initialize(name):
    @name = name
  end

  def to_s
    @name 
  end
end

module Debug
  include D
  def who_am_i?
    '#{self.class.name}(\##{self.object_id}):#{self.to_s}'

class Phonograph
  include Debug
  #...
end

class EightTrack
  include Debug
  #...
end

ph = Phonograph.new('West End Blues')
et = EightTrack.new('Real Pillow')
```

2.为什么会出现mixin
包括c++等一些年龄较大的OOP语言，它们都有一个强大但危险的多重继承特性。现代语言为了权衡利弊，大都舍弃了多重继承，只采用单继承，但单继承在实现抽象时有诸多不便之处。为了弥补缺失，Java引入接口，其他语言则引入了想minxi的技巧，方法虽然不同，但都是为创造一种类似多重继承的效果。

[多重继承](https://www.liaoxuefeng.com/wiki/001374738125095c955c1e6d8bb493182103fac9270762a000/0013868200511568dd94e77b21d4b8597ede8bf65c36bcd000)

```
const mixin = function (obj, mixins) {
  const newObj = obj;
  newObj.prototype = Object.create(obj.prototype)

  for (let prop in mixins) {
    if(mixins.hasOwnProperty(prop)) {
      newObj.prototype[prop] = mixins[prop]
    }
  }

  return newObj;
}

const BigMixin = {
  fly: () => {
    console.log('I can fly')
  }
}

const Big = function() {
  console.log('new big')
}

const FlyBig = mixin(Big, BigMixin)

const flyBig = new FlyBig();
flyBig.fly();
```

3.在react使用mixin
在React中使用mixin：
+ 如果出现普通方法的重名，按理说，后面的方法应该会覆盖前面的方法。那么，在React中是否一样会覆盖呢？事实上，它并不会覆盖，而是在控制台里报了一个在ReactClassInterface里的错误，指出你尝试在组件中多次定义一个方法，这会造成冲突。
+ 如果是React生命周期定义的方法，则会将各个模块的生命周期方法叠加在一起顺序执行

```
const { defineProperty, getOwnPropertyDescriptors } = Object;

function handleClass(target, mixins) {
  if (!mixins.length) { throw new SyntaxError(`@mixin() class ${target.name} requires at least one mixin as an argument`) }

  for (let i = 0; i < mixins.length; i++) {
    const descs = getOwnPropertyDescriptors(mixins)

    for (const key in descs) {
      if(!(key in target.prototype)) {
        defineProperty(target.prototype, key, descs[key])
      }
    }
  }
}

export default function mixin(...mixins) {
  if (typeof mixins[0] === 'function') {
    return handleClass(mixins[0], [])
  }
  else {
    return target => {
      return handleClass(target, mixins)
    }
  }
}
```

```
import React, { Component } from 'React';
import { mixin } from 'core-decorators'

const PureRender = {
  shouldComponentUpdate() {}
}
const Theme = {
  setTheme() {}
}

@mixin(PureRender, Theme)
class MyComponent extends Component {
  render()
}
```

4.mixin的问题(平面结构)

破坏了原有组件的封装性:
+ 可能带来新的state和props，这意味着组件有一些“不可见”的状态需要我们去维护，但我们在使用的时候并不清楚
+ mixin中的方法调用组件的方法，可能被其他组件截获
+ mixin之间形成依赖关系

命名冲突:
尽管可以通过更改名字来解决，但遇到第三方引用，或已经引用了几个mixin的情况下，总是要花一定的成本去解决冲突

增加复杂性

### HOC
> 高阶组件(HOC)是React中用于重用组件逻辑的高级技术。HOC本身不是React API的一部分。它们是从React组件性质中产生的模式。

具体的说，**高阶组件是一个获取组件并返回新组件的函数**

```
const EnhancedComponent = higherOrderComponent(WrappedComponent)
```

```
function addAndLog(x, y) {
  var result = x + y;
  console.log('result:', result)
  return result;
}

function multiplyAndLog(x, y) {
  var result = x * y;
  console.log('result:', result)
  return result;
}


function add(x, y) {
  return x + y;
}
function multiply(x, y) {
  return x * y;
}
function withLogging(wrappedFunction) {
  return function(x, y) {
    var result = wrappedFunction(x, y);

    console.log('result', result)
    return result;
  }
}
var addAndLog = withLogging(add);
var multiplyAndLog = withLogging(multiply);
```
