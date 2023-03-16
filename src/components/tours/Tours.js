
import Tour from '../Tour/Tour';
const data = require("../../data/db.json");

function Tours() {
    return (
        <div id='tour'>
            {data.map((item) => {
                return (
                    <Tour tour={item} key={item.id}/>
                )
            })}
        </div>
    )

}
export default Tours;