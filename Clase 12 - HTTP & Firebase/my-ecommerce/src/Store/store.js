import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/counterSlice'
import shopReducer from '../Features/Shop/shopSlice'
import cartReducer from '../Features/Cart/cartSlice'
import { shopApi } from '../Services/shopServices'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

const store = configureStore({
    reducer: {
        counterReducer,
        shopReducer,
        cartReducer,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(shopApi.middleware),
})

setupListeners(store.dispatch)

export default store