import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../products/recipes'

export function Customers() {

  const menulist = useSelector((state) => {
    console.log(state)
  })
 
  const dispatch = useDispatch()

  return (
    <div>
     
        
    </div>
  )
}