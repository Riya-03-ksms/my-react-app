import { useRef } from "react";
import './Inputuseref.css';
import {useForm} from 'react-hook-form';
export default function Inputuseref() {


    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleClick = (event) => {
        event.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <>
            <form action="get"> 
            <input type="text" ref={nameRef} placeholder="Enter your name"/>
            <input type="email" ref={emailRef} placeholder="xyz@gmail.com"/>
            <input type="password" ref={passwordRef} placeholder="Enter your password"/>
            <button onClick={handleClick}>Submit</button>
            </form>
            
        </>
    );
}