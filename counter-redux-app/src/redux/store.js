import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './counterslice/counterSlice'

export const store=configureStore({
    reducer:{
        counter:counterSlice,
    },
}
)
