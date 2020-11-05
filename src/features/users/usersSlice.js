import { createSlice } from '@reduxjs/toolkit';
const initialState = [
    { id: '1', name: "victor"},
    { id: '2', name: "My My"},
    { id: '3', name: "Cuc Cuc"}
]
const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
})
export default usersSlice.reducer;