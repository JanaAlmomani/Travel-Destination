import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Description from "../Description/Description";
const data = require('../../data/db.json');

function TourDetails() {
    let { id } = useParams();
    return (<>  <Header />
        <div id="tourDe">

            {data.map((item) => {
                if (id === item.id) {
                    return (

                        <div key={item.id} >
                            <h2 >{item.name}</h2>
                            <h5>{item.id}</h5>
                            <h4 >{item.price}</h4>
                            <p>{item.info}</p>
                            <Description descrip={item.info} />
                            <img src={item.image} alt={item.name} />
                           
                        </div>
                    )
                }
            })}
        </div>
        <Footer />
    </>
    )
}

export default TourDetails;