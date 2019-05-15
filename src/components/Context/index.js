import React from 'react'
import Button from './Button'

// 创建themeContext,默认传递的值为light
// ThemeContext是一个对象
export const Context = React.createContext('light');

class App extends React.Component {
  render() {
    return (
      // 传递dark
      <Context.Provider value={{ theme: 'light' }}>
        <Toolbar/>
      </Context.Provider>
    )
  }
}

function Toolbar(props) {
  return (
    <div>
      <Button />
    </div>
  )
}

// class ThemeButton extends React.Component {
//   static contextType = ThemeContext;

//   render() {
//     return <Button theme={this.context}/>
//   }
// }

export default App