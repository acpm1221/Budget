import React, { useState } from 'react'
import ShowBudget from '../component/ShowBudget'
import ShowExpense from '../component/ShowExpense'
import AddExpense from '../component/AddExpense'

import { Context } from '../component/Context'

function MainPage() {
    const[expense,setExpense]=useState(0)
    const[showExpense,setShowExpense]=useState([])


  return (
   <>
   <Context.Provider value={{expense,setExpense,showExpense,setShowExpense}}>

   <ShowBudget/>
   <ShowExpense/>
   <AddExpense/>
   </Context.Provider>
  
   
   </>
  )
}

export default MainPage