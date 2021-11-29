import React from 'react'
import Box from '../Components/Box'
import Title from '../Components/Title'
import Kdata from '../Kdata'

const Bag = () => {
    return (
        <>
        <div className="box-heading">
            <Title
                heading="New Arrival"
            />
            <div className="box">
                {Kdata.map((val) => {
                    return(
                        <Box
                            img1={val.img1}
                            img2={val.img2}
                            title={val.title}
                            price={val.price}
                        />
                    );
                })}
                
            </div>
            
        </div>
        </>
    )
}

export default Bag
