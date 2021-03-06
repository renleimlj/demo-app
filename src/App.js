/* import React from 'react'
import BankBalanceStore from './BankBalanceStore'
import BankActions from './BankActions'

class App extends React.Component {
  constructor(props) {
    super(props)
    BankActions.createAccount()
    this.state = {
      balance : BankBalanceStore.getState()
    }
  }

  componentDidMount() {
    this.storeSubscription  = BankBalanceStore.addListener(
      data => this.handleStoreChange(data)
    )
  }

  componentWillUnmount() {
    this.storeSubscription.remove()
  }

  handleStoreChange() {
    this.setState({balance : BankBalanceStore.getState()})
  }

  deposit() {
    BankActions.depositIntoAccount(Number(this.refs.ammount.value))
    this.refs.ammount.value = ' '
  }

  withdraw() {
    BankActions.withdrawFromAccount(Number(this.refs.ammount.value))
    this.refs.ammount.value = ' '
  }

  render() {
    return (
      <div>
        <header>FluxTrust Bank</header>
        <h1>Your balance is ${(this.state.balance).toFixed(2)}</h1>
        <div className='atm'>
          <input type="text" placeholder="Enter Ammount" ref="ammount"/>
          <div className="container">
          <button onClick={this.withdraw.bind(this)}>Withdraw</button>
          <button onClick={this.deposit.bind(this)}>Deposit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App */

// 采用容器组件高阶函数
import React from 'react'
import BankBalanceStore from './BankBalanceStore'
import BankActions from './BankActions'
import {Container} from 'flux/utils'
import BankRewardsStore from './BankRewardsStore'

class App extends React.Component {
  constructor(props) {
    super(props)
    BankActions.createAccount()
  }

  deposit() {
    BankActions.depositIntoAccount(Number(this.refs.ammount.value))
    this.refs.ammount.value = ' '
  }

  withdraw() {
    BankActions.withdrawFromAccount(Number(this.refs.ammount.value))
    this.refs.ammount.value = ' '
  }

  render() {
    return (
      <div>
        <header>FluxTrust Bank</header>
        <h1>Your balance is ${(this.state.balance).toFixed(2)}</h1>
        <h2>Your Points Rewards  Tier is {this.state.rewardsTier}</h2>
        <div className='atm'>
          <input type="text" placeholder="Enter Ammount" ref="ammount"/>
          <div className="container">
          <button onClick={this.withdraw.bind(this)}>Withdraw</button>
          <button onClick={this.deposit.bind(this)}>Deposit</button>
          </div>
        </div>
      </div>
    )
  }
}

App.getStores = () => ([BankBalanceStore, BankRewardsStore])
App.calculateState = (prevState) => ({
  balance : BankBalanceStore.getState(),
  rewardsTier : BankRewardsStore.getState()
})
export default Container.create(App)