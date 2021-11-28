import React from 'react'
import Sdata from '../Sdata'
import Title from '../Components/Title'
import Box from '../Components/Box'

const School = () => { 
    return (
        <>
        <div className="box-heading">
            <Title
                heading="School/College Bag"
            />
            <div className="box">
                {Sdata.map((value) =>{
                    return(
                        <Box
                            img1={value.img1}
                            img2={value.img2}
                            title={value.title}
                            price={value.price}
                        />
                    );
                })};  
            </div>
        </div>
        </>
            
    )
}

export default School
