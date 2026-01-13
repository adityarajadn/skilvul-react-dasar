import {useState} from 'react';

function Kucing() {
    const [nama, setNama] = useState('Jimin');
    const [warna, setWarna] = useState('Orange');

    let makanan = ['Ikan', 'Ayam', 'Susu'];
    return (
        <div >
            <h2>Nama : {nama}</h2>
            <h2>Warna : {warna}</h2>
            <h2>Makanan:</h2>
            <ul>
                {makanan.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Kucing