import React from 'react'
import { ACTION } from './App'

const OperationButton = ({dispatch,operation}) => {
  return (
    <button onClick={()=>{
        dispatch({type: ACTION.OPERATION,payload : {operation}})
    }}>
        {operation}
    </button>
  )
}

export default OperationButton