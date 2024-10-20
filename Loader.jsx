// this is pollyfill for lazy loading 
import React, { useEffect, useState } from 'react'

const Loader = ({text,time,Component}) => {
    const [loader,setLoader] = useState(true);

    useEffect(()=>{
        let id = setTimeout(()=>{
            setLoader(false);
        },time*1000);
        return () => clearTimeout(id);
    },[]);

  return (
    <div>
      {loader ? <div className="text">{text}</div> :  <Component/>}
    </div>
  )
}

export default Loader;




// syntax for lazy loading 

// const Products = React.lazy(import('../Producs.jsx'))

// <React.Suspense fallback = {<>wait please .. Loading ...</>}>
//     <Products/>
// </React.Suspense>

