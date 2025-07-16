import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../festures/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})

