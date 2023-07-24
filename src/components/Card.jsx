import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({name, image, mainText, text, bg}) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={image} ></Card.Img>
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <Card.Text>
                        {mainText}
                    </Card.Text>
                </Card.Body>
                <Tags bg={bg} text={text} />
            </Card>
        </>
    );
};

export default MyCard;