import { useEffect, useState } from "react";
import axios from 'axios';

//write your code here

 async function callApiHere(setLoading,setData,setError,url){
    try{
        const response=await axios.get(url);
        setData(response.data);
    }
    catch(errorMessage){
        setError(errorMessage)
    }
    setLoading(false);
}

function useFetch(url){
 const [data,setData]=useState(null);
 const [loading,setLoading]=useState(true);
 const [error,setError]=useState(null);

 useEffect(()=>{
    callApiHere(setLoading,setData,setError,url);
 },[url])
 return {data,loading,error}
}
export default useFetch
