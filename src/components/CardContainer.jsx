function CardContainer(props) {
    return (
        
        <div style = {styles.container}>{props.children}</div>
    )
}

export default CardContainer

const styles = {
    container: {
        widht: '100%',
        border: '1px solid black',
        boxShadow: '3px 5px',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
    }
}