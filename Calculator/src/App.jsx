
import { useReducer } from 'react'
import './App.css'
import DigitButton from './components/digitButton'
import OperationButton from './OperationButton';
export const ACTION = {
  ADD_DIGIT: 'add-digit',
  CLEAR: 'clear',
  EVALUATE: 'evaluate',
  OPERATION: "operation",
  DELETE : 'delete',

}

function App() {
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case ACTION.ADD_DIGIT:
      if(payload.digit === '0' && state.currentOperand === '0'){
        return state;
      }
      // console.log(state.currentOperand)
      // if(payload.digit === '.'){
      //   let str = state.currentOperand;
      //   for(var a in str){
      //     if(a === '.') return state;
      //   }
        // console.log(str);
      // }
        return {
          ...state, currentOperand: `${state.currentOperand || ''}${payload.digit}`
        }
      case ACTION.CLEAR:
        return {}
      case ACTION.OPERATION:
        if(state.currentOperand == null && state.oldOpperand == null)
          return state;
        if(state.currentOperand == null){
          return{
            ...state,operation: payload.operation
          }
        }
        if(state.oldOpperand == null){
          return{
            ...state,oldOpperand: state.currentOperand,operation: payload.operation,currentOperand:null
          }
        }
        return{
          ...state,
          oldOpperand: evaluate(state),currentOperand: null,operation: state.operation
        }
       case ACTION.EVALUATE:
          return{
            ...state,oldOpperand:evaluate(state),currentOperand:null,operation:null
          }
        case ACTION.DELETE:
          if(state.currentOperand == null) return state;
          if(state.currentOperand.length === 1) return {...state,currentOperand: null}
          return{
            ...state,currentOperand: state.currentOperand.slice(0,-1)
          }

      default:
        break;
    }
  }
  const evaluate = ({currentOperand,oldOpperand,operation}) => {
    let current = parseFloat(currentOperand);
    let old = parseFloat(oldOpperand);
    if(isNaN(current) || isNaN(old)) return '';
    let result ;
    switch (operation) {
      case null:
        return 0;
      case '*':
        result = current*old;
        break;
      case '+':
        result = current+old;
        break;
      case '-':
        result = old - current;
        break;
      case '/':
        result = old/current;
        break;
      default:
        break;
    }
    return result.toString();

  }
  const [{ currentOperand, oldOpperand, operation }, dispatch] = useReducer(reducer, {});
  return (
    <div className="calculator-grid">
      <div className="output">
        <div>{oldOpperand}{operation}</div>
        <div>{currentOperand}</div>
        {/* <input type='text' value={oldOpperand+operation}/>
<input type='text' value={currentOperand}/> */}
      </div>


      <button className='span-two' onClick={()=>dispatch({type: ACTION.CLEAR})}>AC</button>
      <button onClick = {()=>{
        dispatch({type: ACTION.DELETE })
      }}>DEL</button>
      <OperationButton dispatch={dispatch} operation={'/'} />
      <DigitButton digit={'7'} dispatch={dispatch} />
      <DigitButton digit={'8'} dispatch={dispatch} />
      <DigitButton digit={'9'} dispatch={dispatch} />
      <OperationButton operation={'*'} dispatch={dispatch} />
      <DigitButton digit={'4'} dispatch={dispatch} />
      <DigitButton digit={'5'} dispatch={dispatch} />
      <DigitButton digit={'6'} dispatch={dispatch} />
      <OperationButton operation={'-'} dispatch={dispatch} />
      <DigitButton digit={'1'} dispatch={dispatch} />
      <DigitButton digit={'2'} dispatch={dispatch} />
      <DigitButton digit={'3'} dispatch={dispatch} />
      <OperationButton operation={'+'} dispatch={dispatch} />
      <DigitButton digit={'0'} dispatch={dispatch} />
      <DigitButton digit={'.'} dispatch={dispatch} />
      <button className='span-two' onClick={()=>{
        dispatch({type: ACTION.EVALUATE})
      }}>=</button>


    </div>
  )
}

export default App
