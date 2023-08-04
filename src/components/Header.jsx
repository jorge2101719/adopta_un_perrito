// Creación, definición; uso de props vía destructuring (punto 2 del desafío)

const Header = ({title = 'Título por defecto'}) => {
    return (
        <>
            <h1>{title}</h1>
        </>
    )
}


export default Header;