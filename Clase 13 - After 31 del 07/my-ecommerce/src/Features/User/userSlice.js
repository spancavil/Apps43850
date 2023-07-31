import { createSlice } from "@reduxjs/toolkit";

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
        signOut: (state) => {
            state.value = {
                email: "",
                idToken: "",
            }
        }
    }
})

export const {setUser, signOut} = userSlice.actions

export default userSlice.reducer