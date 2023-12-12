import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../slices/auth'
// import accountReducer from '../slices/account'
// import gameReducer from '../slices/game'

const rootReducer = combineReducers({
    auth: authReducer,
    // account: accountReducer,
    // game: gameReducer
})

export default rootReducer