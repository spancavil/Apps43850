import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "User",
    initialState: {
        value: {
            email: "",
            idToken: "",
            localId: "",
            profileImage: "",
            location: {
                latitude: "",
                longitude: "",
                address: ""
            },
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
                localId: "",
                profileImage: "",
                location: {
                    latitude: "",
                    longitude: "",
                    address: ""
                },
            }
        },
        saveImage: (state, action) => {
            state.value.profileImage = action.payload
        },
        setUserLocation: (state, action) => {
            state.value.location = action.payload
        }
    }
})

export const {
    setUser, 
    signOut, 
    saveImage,
    setUserLocation
} = userSlice.actions

export default userSlice.reducer