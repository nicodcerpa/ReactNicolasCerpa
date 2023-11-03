const ItemListContainer = ({greeting}) => {
    const greetingStyles = {
        fontSize: '3rem',
        fontWeight: '700',
        textAlign: 'center',
        color: 'green',
        padding: '10%'
    }
    return (
        <div style={greetingStyles}>
            {greeting}
        </div>
    )
}

export default ItemListContainer;