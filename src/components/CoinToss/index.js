// Write your code here
import './index.css'

import {Component} from 'react'

class CoinToss extends Component {
  state = {tossValue: 0, heads: 0, tails: 0}

  toss = () => {
    const randomNumber = Math.floor(Math.random() * 2)
    this.setState({tossValue: randomNumber})
    console.log(randomNumber)
    if (randomNumber === 0) {
      this.setState(previousState => ({heads: previousState.heads + 1}))
    } else {
      this.setState(previousState => ({tails: previousState.tails + 1}))
    }
  }

  render() {
    const {tossValue, heads, tails} = this.state
    return (
      <div className="main">
        <div className="card">
          <h1 className="h1">Coin Toss Game</h1>
          <p className="p1">Heads (or) Tails</p>
          {tossValue === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="image"
            />
          )}

          <button className="button" type="button" onClick={this.toss}>
            Toss Coin
          </button>

          <div className="resultContainer">
            <p className="p2">Total: {heads + tails}</p>
            <p className="p2">Heads: {heads}</p>
            <p className="p2">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
