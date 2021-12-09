import React from 'react'
import BoxTwo from '../Components/BoxTwo'
import Title from '../Components/Title'
import Gdata from '../Gdata'

const Gym = () => {
    return (
        <>
        <div className="box-heading">
            <Title
                heading="Gym Bag"
            />
            <div className="box">
                {Gdata.map((valtwo) => {
                    return(
                        <BoxTwo
                            img1={valtwo.img1}
                            img2={valtwo.img2}
                            title={valtwo.title}
                            price={valtwo.price}
                        />
                    );
                })}
            </div>
        </div>
        </>
    )
}

export default Gym
