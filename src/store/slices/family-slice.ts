import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import {
    getTrainerWithStudents
} from '../thunks/family-thunk'

interface IDashboardState {
    data: {}
    isLoading: boolean
    error: string | null
}
const initialState: IDashboardState = {
    data : {},
    isLoading: false,
    error: null,
}

const familySlice = createSlice({
    name: 'family',
    initialState,
    reducers: {},
    
    extraReducers(builder) {
        //dashboard stats extra reducers
        builder.addCase(getTrainerWithStudents.pending, state => {
            state.isLoading = true
        })
        builder.addCase(
            getTrainerWithStudents.fulfilled,
            (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.data = action.payload
            },
        )
        builder.addCase(getTrainerWithStudents.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string
        })
        
    },
})
export const familyReducer = familySlice.reducer
