import {useState} from 'react';

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeName(event) {
        setName(event.target.value);
    }

    function handleChangePassword(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        console.log(name)
        console.log(password)
    }

    return (
        <div style = {{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', marginTop: '20px'}}>
            <input type="text" placeholder='username' onChange={handleChangeName} value = {name}/>
            <input type="password" placeholder='password' onChange={handleChangePassword} value = {password}/>
            <button onClick = {handleSubmit}>Kirim</button>

            <h3>Nama: {name}</h3>
            <h3>Password: {password}</h3>
        </div>
    )
}

export default Login