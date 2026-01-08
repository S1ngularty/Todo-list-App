import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./src/features/authSlice"

export default configureStore({
    reducer:{
        auth:authReducer,
    }
})