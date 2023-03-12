import React, { useState } from "react";

function Description({ descrip }) {

    const [expanded, setExpanded] = useState(false);
    const MAX_LENGTH = 100;

    function toggleDescription() {
        setExpanded((prevState) => !prevState);
    }

    function getDisplayText() {
        return expanded ? descrip : descrip.slice(0, MAX_LENGTH);
    }

    return (
        <div >
            <p>{getDisplayText()}</p>
            {descrip.length > MAX_LENGTH && (
                <button onClick={toggleDescription}>
                    {expanded ? "See less" : "See more"}
                </button>
            )}
        </div>
    );
}

export default Description;