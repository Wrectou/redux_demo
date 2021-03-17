import React, { Component } from 'react'

export default class Count extends Component {

  state = {
    count: 0
  }

  increment = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    this.setState({count: count+value*1})
  }

  decrement = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    this.setState({count: count-value*1})
  }

  incrementIfOdd = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    if (count % 2 !== 0) this.setState({count: count+value*1})
  }

  incrementAsync = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    setTimeout(() => {
      this.setState({count: count+value*1})
    }, 1000)
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h2>当前求和为：{count}</h2>
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
