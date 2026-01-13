import {useState} from 'react';

function Counter() {
    const [num, setNum] = useState(0);

    function Add() {
        setNum(num + 1);
    }

    function Subtract() {
        setNum(num - 1);
    }

    return (
        <div>
            <button onClick = {Add}>+</button>
            <h2>{num}</h2>
            <button onClick = {Subtract}>-</button>
        </div>
    )
}

export default Counter

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
    }
}