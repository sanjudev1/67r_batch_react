

// state | name | increment | decremtn

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
menu_items:[]
}

export const RecipeSlice = createSlice({
  name: 'foodie',
  initialState,
  reducers: {
    increment: (state,a) => {
        console.log("increment is triggerd",a.payload)

       const exisiting_item= state.menu_items.find(e=>e.id==a.payload.id)
       if(exisiting_item){
        state.menu_items.map((e,index)=>{
            if(e.id==exisiting_item.id){
             state.menu_items.splice(index,1,{...e,count:exisiting_item.count+1} )           }
        })
       }else{
        state.menu_items.push({...a.payload,count:1})
       }
      
    },
    decrement: (state,a) => {
     const exisiting_item= state.menu_items.find(e=>e.id==a.payload.id)
       if(exisiting_item){
        state.menu_items.map((e,index)=>{
            if(e.id==exisiting_item.id){
              if(e.count==1){
                    state.menu_items.splice(index,1 )
                
              }else{

                state.menu_items.splice(index,1,{...e,count:exisiting_item.count-1} )}
              }
        })
       }
    },
    
  },
})


export const { increment, decrement } = RecipeSlice.actions

export default RecipeSlice.reducer