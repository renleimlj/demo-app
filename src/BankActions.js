import AppDispatcher from './AppDispatcher'
import bankConstants from './constants'

let  BankActions = {
    createAccount() {
        AppDispatcher.dispatch({
            type : bankConstants.CREATED_ACCOUNT,
            ammount : 0
        })
    },
    depositIntoAccount(ammount) {
        AppDispatcher.dispatch({
            type : bankConstants.DEPOSITED_INTO_ACCOUNT,
            ammount : ammount
        })
    },
    withdrawFromAccount(ammount) {
        AppDispatcher.dispatch({
            type : bankConstants.WITHDRAW_FROM_ACCOUNT,
            ammount : ammount
        })
    }
}

export default BankActions