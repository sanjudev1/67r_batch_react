import { configureStore } from '@reduxjs/toolkit'
import { RecipeSlice } from '../products/recipes'

export const banjarhillsstore = configureStore({
    reducer:{
      pullama_recipes:RecipeSlice.reducer
    }
})