import React from 'react'
import './Keypad.css'
import { useState } from 'react'

export default function Keypad({ Handleclear, Handleclick, Handleclickequal, HandleCE }) {
    // const [partial, setPartial] = useStateWithCallbackLazy("")
    // const Handleclick = (e) => {
    //     setPartial(partial + e.target.value);
    //     normal(partial);                    Here, Function is called before setPartial update the Data.
    // }
    // const Handleclickequal = () => {
    //     setPartial(eval(partial))
    //     calculate(partial);                 Here, Function is called before setPartial update the Data.
    // }
    // const Handleclear = () => {
    //     setPartial("");
    //     normal(partial);                    Here, Function is called before setPartial update the Data.
    // }
    return (
        <>  
            <button onClick={Handleclear} value="C">C</button>
            <button onClick={HandleCE} value="CE">CE</button>
            <button onClick={(e)=>{Handleclick(e.target.value)}} value="+">+</button>
            <button onClick={(e)=>{Handleclick(e.target.value)}} value="/">/</button>
            <button onClick={(e)=>{Handleclick(e.target.value)}} value="0">0</button>
            <button onClick={(e)=>{Handleclick(e.target.value)}} value=".">.</button>
            <button onClick={(e)=>{Handleclick(e.target.value)}} value="**">Pow</button>
            <button onClick={(e)=>{Handleclick(e.target.value)}} value="%">%</button>
            <button onClick={(e)=>{Handleclick(e.target.value)}} value="7">7</button>
            <button onClick={(e)=>{Handleclick(e.target.value)}} value="8">8</button>
            <button onClick={(e)=>{Handleclick(e.target.value)}} value="9">9</button>
            <button onClick={(e)=>{Handleclick(e.target.value)}} value="*">X</button>
            <button onClick={(e)=>{Handleclick(e.target.value)}} value="4">4</button>
            <button onClick={(e)=>{Handleclick(e.target.value)}} value='5'>5</button>
            <button onClick={(e)=>{Handleclick(e.target.value)}} value="6">6</button>
            <button onClick={(e)=>{Handleclick(e.target.value)}} value="-">-</button>
            <button onClick={(e)=>{Handleclick(e.target.value)}} value="1">1</button>
            <button onClick={(e)=>{Handleclick(e.target.value)}} value="2">2</button>
            <button onClick={(e)=>{Handleclick(e.target.value)}} value="3">3</button>
            <button onClick={Handleclickequal} value="=">=</button>
        </>
    )
}