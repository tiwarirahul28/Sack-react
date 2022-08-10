import React from 'react'
import './item.css'
import Box from './Box'
import Title from './Title'
import PolyesterHero from '../assets/frontpage/one.jpg';
import PolyesterHero1 from '../assets/frontpage/two.jpg';
import PolyesterHeroBlue from '../assets/frontpage/four.jpg';
import PolyesterHeroBlue1 from '../assets/frontpage/three.jpg';
import SkybagsMarvel from '../assets/bag/SkybagsMarvel.jpg';
import SkybagsMarvel1 from '../assets/bag/SkybagsMarvel1.jpg';
import CaptainAmericaShield from '../assets/schoolbag/CaptainAmericaShield.jpeg';
import CaptainAmericaShield1 from '../assets/schoolbag/CaptainAmericaShield1.jpeg';
import Drazo from '../assets/schoolbag/Drazo.jpeg';
import Drazo1 from '../assets/schoolbag/Drazo1.jpeg';
import LynxCasual from '../assets/schoolbag/LynxCasual.jpeg';
import LynxCasual1 from '../assets/schoolbag/LynxCasual1.jpeg';
import SackBrand from '../assets/travel/SackBrand.jpg'
import SackBrand1 from '../assets/travel/SackBrand1.jpg'
import SackTrolley from '../assets/travel/SackTrolley.jpg'
import SackTrolley1 from '../assets/travel/SackTrolley1.jpg'
import SafariRay from '../assets/travel/SafariRay.jpg'
import SafariRay1 from '../assets/travel/SafariRay1.jpg'

const Item = () => {
    return (
        <>
        <div className="box-heading">
            <Title
                heading="New Arrival"
            />
            <div className="box">
            <Box
                img1={PolyesterHero}
                img2={PolyesterHero1}
                title="Polyester Hero"
                price="399"
            />
            <Box
                img1={PolyesterHeroBlue}
                img2={PolyesterHeroBlue1}
                title="Polyester Hero Blue"
                price="399"
            />
            <Box
                img1={SkybagsMarvel}
                img2={SkybagsMarvel1}
                title="Skybags Marvel"
                price="499"
            />
            <Box
                img1={CaptainAmericaShield}
                img2={CaptainAmericaShield1}
                title="Captain America Shield"
                price="399"
            />
            <Box
                img1={Drazo}
                img2={Drazo1}
                title="Drazo"
                price="299"
            />
            <Box
                img1={LynxCasual}
                img2={LynxCasual1}
                title="Lynx Casual"
                price="399"
            />
            <Box
                img1={SackBrand}
                img2={SackBrand1}
                title="Sack Brand"
                price="1299"
            />
            <Box
                img1={SackTrolley}
                img2={SackTrolley1}
                title="Sack Trolley"
                price="1499"
            />
            <Box
                img1={SafariRay}
                img2={SafariRay1}
                title="Safari Ray"
                price="1599"
            />
            </div>
        </div>

        </>
    )
}

export default Item
