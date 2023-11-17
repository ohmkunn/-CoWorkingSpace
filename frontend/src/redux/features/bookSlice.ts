import {createSlice} from "@reduxjs/toolkit"
import { BookingItem } from "../../../interfaces"
import { PayloadAction } from "@reduxjs/toolkit"

type BookState = {
    bookItems: BookingItem[]
}

const initialState:BookState = { bookItems: []}

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers:{
        addBooking: (state, action:PayloadAction<BookingItem>)=>{
            if (state.bookItems.length > 0) {
                state.bookItems = []
                state.bookItems.push(action.payload)
            } else {
                state.bookItems.push(action.payload)
            }
            
        },
        removeBooking: (state, action:PayloadAction<BookingItem>)=>{
            state.bookItems = []
        }

    }
})

export const { addBooking, removeBooking} = bookSlice.actions
export default bookSlice.reducer