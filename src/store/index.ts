import { persistStore } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'

import {
    getTrainerWithStudents
} from './thunks/family-thunk'

import  { familyReducer } from './slices/family-slice'

const store = configureStore({
    reducer: {
        family: familyReducer        
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable check for non-serializable values
    }),
})

export default store

export const persistor = persistStore(store)

export {
    getTrainerWithStudents
}
