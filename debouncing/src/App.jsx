import { useEffect, useState } from 'react'
import './App.css'

function App() {
  function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(
      () => {
        // Set debouncedValue to value (passed in) after the specified delay
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
  
        // Return a cleanup function that will be called every time ...
        // ... useEffect is re-called. useEffect will only be re-called ...
        // ... if value changes (see the inputs array below).
        // This is how we prevent debouncedValue from changing if value is ...
        // ... changed within the delay period. Timeout gets cleared and restarted.
        // To put it in context, if the user is typing within our app's ...
        // ... search box, we don't want the debouncedValue to update until ...
        // ... they've stopped typing for more than 500ms.
        return () => {
          clearTimeout(handler);
        };
      },
      // Only re-call effect if value changes
      // You could also add the "delay" var to inputs array if you ...
      // ... need to be able to change that dynamically.
      [value, delay]
    );
  
    return debouncedValue;
  }
  

  const [word,setWord] = useState('');
  const [ suggestions, setSuggestions] = useState([]); 
  const [display,setDisplay] = useState();

  const bouncedWord = useDebounce(word,500);
  // data 

  const fetchData =  async () => {
    const data = await fetch(`https://dummyjson.com/products/search?q=${bouncedWord}`);

    const response = await data.json();
    if(word) setSuggestions(response.products);
    else {
      setSuggestions([]);
    }

  }
  useEffect(()=>{
    fetchData();
  },[bouncedWord])
  console.log(suggestions);
  const handleClick = () =>{
    
    setWord('');
    


  }

  const handleSelect = (item) => {
    setWord(item.title);
    setDisplay();
    setDisplay(item);
  }
  console.log(display)



  return (
    <div>
      <input type='text' placeholder='search item here' onChange={(e)=>setWord(e.target.value)} value={word}/>
      <button onClick={()=> handleClick()}> Search </button>
      {
        suggestions && suggestions.length !== 0 &&
        <div className='suggestion-container'>
          {
            suggestions.map((item,index)=>{
              return( 
               <div key={index} onClick={()=>handleSelect(item)}>
                <p>{item.title}</p>
                </div>

              )
            })
          }
        </div>
      }
    <div className="show">
        {
          display ? 
          <>
          <img src={display.images[0]} style={{width: '100px',height: '100px'}}/>
          </> : <></>
        }

      </div>

    </div>

  )
}

export default App
