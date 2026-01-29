import React, { useEffect } from 'react'
import { Audio, ColorRing, DNA } from 'react-loader-spinner'

 function CustomSpinner () {

    // useEffect(()=>{
    //   return ()=>{alert("spinner is unmounted")}
    // })

     return (
  <DNA
visible={true}
height="80"
width="80"
ariaLabel="dna-loading"
wrapperStyle={{}}
wrapperClass="dna-wrapper"
/>
  )
 }

export default CustomSpinner