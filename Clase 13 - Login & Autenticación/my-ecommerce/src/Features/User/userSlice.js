import { createSlice } from "@reduxjs/toolkit";
import Products from '../../Data/products.json'

export const userSlice = createSlice({
    name: "User",
    initialState: {
        value: {
            email: "",
            idToken: "",
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload
        },
        logOut: (state) => {
            state.value = {
                email: "",
                idToken: "",
            }
        }
    }
})

export const {setUser, logOut} = userSlice.actions

export default userSlice.reducer