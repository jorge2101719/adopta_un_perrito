// Creación, definición; uso de props vía destructuring (punto 2 del desafío)
// Se agrega un texto por defecto en caso de no aparecer otro vía app.jsx
const Header = ({title = 'Título por defecto'}) => {
    return (
        <>
            <h1>{title}</h1>
        </>
    )
}


export default Header;