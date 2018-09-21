import React from 'react'

const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar/>
      </ThemeContext.Provider>
    )
  }
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

function ThemedButton(props) {
  return (
    <ThemeContext>
      {theme => <Button {...props} theme={theme}/>}
    </ThemeContext>
  )
}