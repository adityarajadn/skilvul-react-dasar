const styles = {
    container: {
        border: '1px solid black',
        backgroundColor: '#f0f0f0',
        borderRadius: '15px',
        padding: '10px',
        margin: '10px',
        textAlign: 'center',
        color: '#333',
    }
}

function CardBuah(buah) {
    return (
        <div style={styles.container}>
            <h3>{buah.nama}</h3>
        </div>
    )
}

export default CardBuah

