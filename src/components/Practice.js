import { useState,useEffect } from "react";
const Practice = () => {

    const data = () =>{
        const [count, setCount] = useState(0);
        useEffect(() => {
           console.log("Component rendered successfully");
         }, [count]);

         
    } 
    return (
        <div>
             <h1>{data()}</h1>
        </div>
    )

    
}
export default Practice;


