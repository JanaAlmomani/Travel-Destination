
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const data = require("../../data/db.json");


function Tour(props) {
    // return (
    //     <div id='tour'>
    //         {data.map((item) => {
    //             return (
    //                 <div id={item.id}>
    //                 <h2>{item.name}</h2>
    //                 <img src={item.image} alt={item.name}></img>
    //             </div>
    //         )
    //     })}
    //     </div>
    // )
    return (
        <div id='tour'>
            {data.map((item) => {
                return (
                    <div key={item.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image} style={{ width: '200px' }} />
                            <Card.Body>
                                <Card.Title><h2>{item.name}</h2></Card.Title>
                                <Button><Link to={`/city/${item.id}`}>More Details</Link></Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
    )

}
export default Tour;