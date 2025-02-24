import {useState, useEffect} from 'react'

const useDebounce = (value, delay) => {

  const [debounceValue, setDebounceValue] = useState(value)
  const debounceHandler =  ()=> setTimeout(()=>setDebounceValue(value),delay)
 
  useEffect(()=>{
    debounceHandler()

    return ()=>{
      clearTimeout(debounceHandler)
    }

  },[value, delay])


  return debounceValue
    
  
}

export default useDebounce