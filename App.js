import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RockPaperScissor from './src/components/RockPaperScissor'
import store from './src/redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RockPaperScissor/>
      </Provider>
    )
  }
}
export default App