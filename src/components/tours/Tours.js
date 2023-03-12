import './Tours.css';
import Tour from '../Tour/Tour';
const data = require("../../data/db.json");

function Tours() {
    // console.log(data);
    return (
        // <div id='tours'>

        //     {data.map((item) => {
        //         return (
        //             <div>
        //                 <div class="text">
        //                     <h2>{item.name}</h2>
        //                     <h3>{item.id}</h3>
        //                     <p>{item.info}</p>
        //                     <h4>{item.price}</h4>
        //                 </div>
        //                 <img src={item.image} alt={item.name}></img>
        //             </div>
        //         )

        //     })}
        // </div>
        <>
            <Tour tour={Tour} />
        </>
    )
}

export default Tours;
