import React from 'react'
import Box from '../Components/Box'
import Title from '../Components/Title'
import bag1 from '../assets/bag/bag1.jpg';
import bag from '../assets/bag/bag.jpg';
import barbie from '../assets/bag/barbie.jpg';
import barbie1 from '../assets/bag/barbie1.jpg';
import barbies from '../assets/bag/barbies.jpg';
import barbies1 from '../assets/bag/barbies1.jpg';
import ben1 from '../assets/bag/ben1.jpg';
import ben2 from '../assets/bag/ben2.jpg';
import bheem from '../assets/bag/bheem.jpg';
import bheem1 from '../assets/bag/bheem1.jpg';
// import bag1 from '../assets/bag/bag1.jpg';
// import bag from '../assets/bag/bag.jpg';
// import bag1 from '../assets/bag/bag1.jpg';
// import bag from '../assets/bag/bag.jpg';

const Bag = () => {
    return (
        <>
        <div className="box-heading">
            <Title
                heading="New Arrival"
            />
            <div className="box">
                <Box
                    img1={bag1}
                    img2={bag}
                    title="Axon"
                    price="350"
                />
                <Box
                    img1={barbie}
                    img2={barbie1}
                    title="Axon"
                    price="350"
                />
                <Box
                    img1={barbies}
                    img2={barbies1}
                    title="Axon"
                    price="350"
                />
                <Box
                    img1={ben1}
                    img2={ben2}
                    title="Axon"
                    price="350"
                />
                <Box
                    img1={bheem}
                    img2={bheem1}
                    title="Axon"
                    price="350"
                />
            </div>
            <Title
                heading="New Arrival"
            />
        </div>
        </>
    )
}

export default Bag
