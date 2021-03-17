import React, { Component } from 'react'
// 引入store，用于获取redux保存的状态
import store from '../../redux/store'
import {createIncrementAction,createDecrementAction} from '../../redux/count_action'
export default class Count extends Component {

  state = {
    carName: 'BMW'
  }

  // componentDidMount() {
  //   // 检测redux中状态的变化，只要变化，就调用render
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }

  increment = () => {
    const {value} = this.selectNumber
    store.dispatch(createIncrementAction(value*1))
  }

  decrement = () => {
    const {value} = this.selectNumber
    store.dispatch(createDecrementAction(value*1))
  }

  incrementIfOdd = () => {
    const {value} = this.selectNumber
    const count = store.getState()
    if (count % 2 !== 0) store.dispatch(createIncrementAction(value*1))
  }

  incrementAsync = () => {
    const {value} = this.selectNumber
    setTimeout(() => {
      store.dispatch(createIncrementAction(value*1))
    }, 1000)
  }

  render() {
    return (
      <div>
        <h2>当前求和为：{store.getState()}</h2>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&emsp;
        <button onClick={this.increment}>+</button>&emsp;
        <button onClick={this.decrement}>-</button>&emsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&emsp;
        <button onClick={this.incrementAsync}>异步加</button>&emsp;
      </div>
    )
  }
}
