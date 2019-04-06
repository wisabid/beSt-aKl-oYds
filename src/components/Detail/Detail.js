import React from 'react';

const Detail = (props) => {
    console.clear();
    console.table(props.livedetails);
    return (
        <>
            <h4 onClick={props.goback}> Back </h4>
            <div className="bao-live">
                    
                <ul></ul>                     
            </div>
        </>        
    )
}

export default Detail;