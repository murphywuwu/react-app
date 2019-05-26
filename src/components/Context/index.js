import React from 'react'
// import Button from './Button'

/* 
 * 版本1:手动传递theme prop到Button组件
 */
// class App extends React.Component {
//   render() {
//     return <Toolbar theme="dark"/>
//   }
// }

// function Toolbar(props) {
//   return (
//     <div>
//       <ThemedButton theme={props.theme}/>
//     </div>
//   )
// }


// class ThemedButton extends React.Component  {
//   render() {
//     return <Button theme={this.props.theme}/>
//   }
// }

/* 
 * 版本2: 使用context，我们可以避免经过中间元素传递props
 */
const ThemeContext = React.createContext('white');
const UserContext = React.createContext({ name: 'Guest' });

class App extends React.Component {
  render() {    

    return (
      // 每一个Context对象都附带一个Provider React组件，允许使用consuming component来订阅context的变化
      // 接收要传递给作为此Provider的后代的consuming components的value prop.
      // 作为Provider后代的所有consumers将在Provider的value prop发生变化时，重新渲染。
      // 从Provider到其后代consumers的传播，不受sholudComponentUpdate方法的约束
      // 因此，即使祖先组件退出更新，consumer也会更新。
      // 通过使用Object.is相同的算法比较新旧值来确定更改。
      // 因此，确定更改的可能会在对象作为value传递时，导致一些问题：代码可见./Caveats
      <ThemeContext.Provider value="black">
        <UserContext.Provider value="wuwu">
          <Toolbar/>
          {/* 
            consuming multiple contexts
            <Layout/> 
          */}
        </UserContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

// function Layout() {
//   return (
//     <div>
//       <Siderbar/>
//       <Content/>
//     </div>
//   )
// }

// function Content() {
//   return (
//     <ThemeContext.Consumer>
//       {
//         theme => (
//           <UserContext.Consumer>
//             {
//               user => (
//             <ProfilePage user={user} theme={theme}/>
//               )
//             }
//           </UserContext.Consumer>
//         )
//       }

//     </ThemeContext.Consumer>
//   )
// }

function Toolbar(props) {
  return (
    <div>
    {/* not pass theme props */}
      <ThemedButton/>
    </div>
  )
}

class ThemedButton extends React.Component {
  // 定义contexType读取当前ThemeContext
  static contextType = ThemeContext;
  render () {
    // 通过this.context访问当前上下文
    return <button style={{backgroundColor: this.context}}>点击我</button>
  }
}
export default App