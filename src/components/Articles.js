
import React,{useState,useEffect} from 'react';


function Articles(){
    const [input,setInput]=useState('')
    const [result,setResult]=useState([])

    useEffect(() => {
        const getData = setTimeout(() => {
            let url=`https://jsonmock.hackerrank.com/api/articles?author=${input}`
            fetch(url)
            .then(res=>res.json())
            .then(result=>(setResult(result.data)))
            console.log(result,"result")
        }, 3000)
        return () => clearTimeout(getData)
    }, [input])

    return (
        <div>
            <span>Author</span>
            <span><input  
            onChange={(event) => setInput(event.target.value)}
            >
                </input></span>
            <span><button 
            >fetch</button></span>
            <div style={{border:"1px solid black",width:'500px'}}>
            {
               result.length ?
            <ol>{result.map((value,idx)=>{
                    return (<li key={idx}>{value.title}</li>)
            })}</ol>
            :<h1>No Data Found</h1>
            }
            </div>
            </div>
        )
        }

export default Articles;