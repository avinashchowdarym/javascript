import { useState } from 'react'
import './App.css'

const data = [
  {
    title: 'Title 1',
    content: ' This is a paragraph .. This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph '
    
  },
  {
    title: 'Title 2',
    content: ' This is a paragraph .. This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph '
    
  },{
    title: 'Title 3',
    content: ' This is a paragraph .. This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph '
    
  },{
    title: 'Title 4',
    content: ' This is a paragraph .. This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph '
    
  },{
    title: 'Title 5',
    content: ' This is a paragraph .. This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph ..This is a paragraph '
    
  },

]


function App() {
  const [selector,setSelector] = useState();
  const handleClick = (index) =>{
    if(selector === index){
      setSelector(null);
    }
    setSelector(index);
  }
  

  return (
   <div className='App'>
    {
      data.map((item,index)=>{
        return(
          <div key={index} onClick={()=>{handleClick(index)}} className='box'>
            <div className='title' >{item.title}</div>
            <div className= {selector === index ? 'content-active' : 'content'}>{item.content}</div>
            </div>
        )
      }
    )
  }
    
   </div>
  )
}

export default App
