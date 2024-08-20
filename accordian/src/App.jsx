import { useState } from 'react'
import './App.css'

const data = [
  {
    title: 'this is Title 1',
    content: ' This is a paragraph .. This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph '
    
  },
  {
    title: 'this is Title 1',
    content: ' This is a paragraph .. This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph '
    
  },{
    title: 'this is Title 1',
    content: ' This is a paragraph .. This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph '
    
  },{
    title: 'this is Title 1',
    content: ' This is a paragraph .. This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph '
    
  },{
    title: 'this is Title 1',
    content: ' This is a paragraph .. This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph '
    
  },

]


function App() {
  const [selector,setSelector] = useState();
  const handleClick = (index) =>{
    if(selector === index){
      setSelector();
    }
    setSelector(index);
  }


  return (
   <div className='App'>
    {
      data.map((item,index)=>{
        return(
          <div key={index} onClick={()=>{handleClick(index)}}>
            <div className='title' >{item.title}</div>
            <div className='content hidden'>{item.content}</div>
            </div>
        )
      })
  }
    
   </div>
  )
}

export default App
