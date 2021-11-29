import React from 'react';
import Title from '../Components/Title'
import Box from '../Components/Box'
import Tdata from '../Tdata';

const Travel = () => {
    return (
        <>
        <div className="box-heading">
            <Title
                heading="Travelling Bag"
            />
            <div className="box">
                {Tdata.map((val) => {
                    return(
                        <Box
                            img1={val.img1}
                            img2={val.img2}
                            title={val.title}
                            price={val.price}
                        />
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Travel
