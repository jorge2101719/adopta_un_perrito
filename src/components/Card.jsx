// Creación de Card usando ReactBootstrap; uso de props vía destructuring (punto 3 del desafío)
import Card from "react-bootstrap/Card";
// importación de Tags (punto 4 del desafío)
import Tags from "./Tags";

const MyCard = ({ name, image, mainText, text, bg, stock }) => {
    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image}></Card.Img>
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    {/* si bien no se específica en el desafío, se agrega un elemento */}
                    {/* con inclusión de clase dinámica en forma optativa */}
                    <Card.Subtitle className={stock < 1 ? 'sinStock' : null}> Cantidad: <span>{stock}</span> </Card.Subtitle>
                    <Card.Text>{mainText}</Card.Text>
                </Card.Body>
                {/* uso del Tags con props desde App.jsx (punto 4 del desafío) */}
                <Tags bg={bg} text={text} />
            </Card>
        </>
    );
};

export default MyCard;
