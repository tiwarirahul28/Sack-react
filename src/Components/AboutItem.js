import React from 'react'
import "./aboutItem.css"
import Box from './Box'
import Axon1 from '../assets/frontpage/Axon-1.jpg'
import Axon2 from '../assets/frontpage/Axon-2.jpg'
import Ben1 from '../assets/frontpage/ben1.jpg'
import Ben2 from '../assets/frontpage/ben2.jpg'


const AboutItem = () => {
    return (
        <>
        <section className="featured-recipes">
            <h5 class="featured-title">Look At This Awesomesouce!</h5>
            <div className="box">
            <Box
                img1={Axon1}
                img2={Axon2}
                title="Axon"
                price="350"
            />
            <Box
                img1={Ben1}
                img2={Ben2}
                title="Ben10"
                price="200"
            />
            <Box
                img1={Axon1}
                img2={Axon2}
                title="Axon"
                price="350"
            />
            <Box
                img1={Ben1}
                img2={Ben2}
                title="Ben10"
                price="200"
            />
            <Box
                img1={Axon1}
                img2={Axon2}
                title="Axon"
                price="350"
            />
            </div>
        </section>
        </>
    )
}

export default AboutItem
