import { createAsyncThunk } from '@reduxjs/toolkit'
import { HTTP_METHOD } from '../../api'
import { CONSTANTS } from '../../utils'

export const getTrainerWithStudents = createAsyncThunk(
    'trainer/trainerwithstudents',
    async (data: {}, { rejectWithValue }) => {
        try {
            const response = await HTTP_METHOD.hitNetworkWithGetMethod(
                CONSTANTS.GET_STUDENTS_WITH_TRAINERS,
                data,
            )
            console.log(response)
            return response
        } catch (error) {
            console.error(error)
            return rejectWithValue(error)
        }
    },
)
