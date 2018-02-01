import {createStore,applyMiddleware} from 'redux'
import thunk from  'redux-thunk'

import {counter} from './reducers'
import  {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(
    counter,
    composeWithDevTools(applyMiddleware(thunk))//异步中间件，实现异步请求
)

export default store