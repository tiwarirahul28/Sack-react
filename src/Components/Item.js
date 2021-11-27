import React from 'react'
import './item.css'
import Box from './Box'
import Title from './Title'
import Axon1 from '../assets/frontpage/Axon-1.jpg'
import Axon2 from '../assets/frontpage/Axon-2.jpg'
import Ben1 from '../assets/frontpage/ben1.jpg'
import Ben2 from '../assets/frontpage/ben2.jpg'
import bigtommy1 from '../assets/frontpage/bigtommy1.jpg'
import bigtommy2 from '../assets/frontpage/bigtommy2.jpg'
import capbag1 from '../assets/frontpage/capbag1.jpg'
import capbag2 from '../assets/frontpage/capbag2.jpg'
import capbag3 from '../assets/frontpage/capbag3.jpg'
import capbag4 from '../assets/frontpage/capbag4.jpg'
import minispibag1 from '../assets/frontpage/minispibag1.jpg'
import minispibag2 from '../assets/frontpage/minispibag2.jpg'
import mininike1 from '../assets/frontpage/mininike1.jpg'
import mininike2 from '../assets/frontpage/mininike2.jpg'
import dore1 from '../assets/frontpage/dore1.jpg'
import dore2 from '../assets/frontpage/dore2.jpg'
import fantastic1 from '../assets/frontpage/fantastic1.jpg'
import fantastic2 from '../assets/frontpage/fantastic2.jpg'
import minitommy1 from '../assets/frontpage/minitommy1.jpg'
import minitommy2 from '../assets/frontpage/minitommy2.jpg'
import nike1 from '../assets/frontpage/nike1.jpg'
import nike2 from '../assets/frontpage/nike2.jpg'
import pillowbook1 from '../assets/frontpage/pillowbook1.jpg'
import pillowbook2 from '../assets/frontpage/pillowbook2.jpg'
import puma1 from '../assets/frontpage/puma1.jpg'
import puma2 from '../assets/frontpage/pum2.jpg'
import quechea1 from '../assets/frontpage/quechea1.jpg'
import quechea2 from '../assets/frontpage/quechea2.jpg'
import shop1 from '../assets/frontpage/shop1.jpg'
import shop2 from '../assets/frontpage/shop2.jpg'
import spibag1 from '../assets/frontpage/spibag1.jpg'
import spibag2 from '../assets/frontpage/spibag2.jpg'
import tiffin1 from '../assets/frontpage/tiffin1.jpg'
import tiffin2 from '../assets/frontpage/tiffin2.jpg'
import travelbag1 from '../assets/frontpage/travelbag1.jpg'
import travel2 from '../assets/frontpage/travel2.jpg'
import traveltrolly1 from '../assets/frontpage/traveltrolly1.jpg'
import traveltrolly2 from '../assets/frontpage/traveltrolly2.jpg'
import trolly1 from '../assets/frontpage/trolly1.jpg'
import trolly2 from '../assets/frontpage/trolly2.jpg'



const Item = () => {
    return (
        <>
        <div className="box-heading">
            <Title
                heading="New Arrival"
            />
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
                img1={bigtommy1}
                img2={bigtommy2}
                title="Tommy Highilfer"
                price="250"
            />
            <Box
                img1={capbag1}
                img2={capbag2}
                title="Black stylish"
                price="300"
            />
            <Box
                img1={capbag3}
                img2={capbag4}
                title="Captain America"
                price="300"
            />
            <Box
                img1={minispibag1}
                img2={minispibag2}
                title="Cool"
                price="300"
            />
            <Box
                img1={mininike1}
                img2={mininike2}
                title="Mini Nike"
                price="150"
            />
            <Box
                img1={dore1}
                img2={dore2}
                title="Kids Doremon"
                price="200"
            />
            <Box
                img1={minitommy1}
                img2={minitommy2}
                title="Tommy Highilfer"
                price="300"
            />
            <Box
                img1={nike1}
                img2={nike2}
                title="Golden Nike"
                price="350"
            />
            <Box
                img1={pillowbook1}
                img2={pillowbook2}
                title="Pillow Book"
                price="250"
            />
            <Box
                img1={quechea1}
                img2={quechea2}
                title="Quechua"
                price="200"
            />
            <Box
                img1={puma1}
                img2={puma2}
                title="Puma"
                price="350"
            />
            <Box
                img1={fantastic1}
                img2={fantastic2}
                title="Fantastic"
                price="400"
            />
            <Box
                img1={trolly1}
                img2={trolly2}
                title="Travelling"
                price="1550"
            />
            <Box
                img1={shop1}
                img2={shop2}
                title="Shopping Carry"
                price="350"
            />
            <Box
                img1={spibag1}
                img2={spibag2}
                title="Kids Spiderman"
                price="350"
            />
            <Box
                img1={tiffin1}
                img2={tiffin2}
                title="Tiffin"
                price="250"
            />
            <Box
                img1={travelbag1}
                img2={travel2}
                title="Hiking Travel"
                price="1450"
            />
            <Box
                img1={traveltrolly1}
                img2={traveltrolly2}
                title="Travelling"
                price="1550"
            />
             
            </div>
        </div>

        </>
    )
}

export default Item
