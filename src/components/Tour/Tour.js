import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Tour(props){

    return(
       
        <div key={props.tour.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={props.tour.image} style={{ width: '200px' }} />
                            <Card.Body>
                                <Card.Title><h2>{props.tour.name}</h2></Card.Title>
                                <Button><Link to={`/city/${props.tour.id}`}>More Details</Link></Button>
                            </Card.Body>
                        </Card>
                    </div>

    );
}
export default Tour;