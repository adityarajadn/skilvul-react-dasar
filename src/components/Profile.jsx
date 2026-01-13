import { useState } from 'react'

function Profile() {
    const [name, setName] = useState('John Doe');
    
    return (
        <div>
            <img src="" alt="" />
            <h2>{name}</h2>
        </div>
    )
}