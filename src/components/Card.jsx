// Creación de Card usando ReactBootstrap; uso de props vía destructuring (punto 3 del desafío)
import Card from "react-bootstrap/Card";
// importación de Tags (punto 4 del desafío)
import Tags from "./Tags";

const MyCard = ({ name, image, mainText, text, bg }) => {
    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image}></Card.Img>
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <Card.Text>{mainText}</Card.Text>
                </Card.Body>
                {/* uso del Tags con props desde App.jsx (punto 4 del desafío) */}
                <Tags bg={bg} text={text} />
            </Card>
        </>
    );
};

export default MyCard;
