import {Dispatcher} from 'flux'

class AppDispacher extends Dispatcher {
    dispatch(action = {}) {
        console.log("Dispatched", action)
        super.dispatch(action)
    }
}

export default new AppDispacher() 