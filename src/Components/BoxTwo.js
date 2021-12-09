import React from 'react'
import './BoxTwo.css'

const BoxTwo = ({title, price, img1, img2}) => {
    return (
        <>
        <div className="card-two">
            <div className="img-container-two">
                <img src={img1} alt="images"/>
                <img src={img2} alt="images"/>
            </div>
            <div className="infobox-two">
                <div class="title-two">
                    {title} Bag 
                </div>
                <div className="price-two">
                   Rs: {price}/-
                </div>
                <div className="buttongroup-two">
                    <button className="buy-two">
                        Buy Now
                    </button>
                    <button className="addtocart-two">
                        Add To Cart 
                    </button>
                </div>
            </div>
        </div>
    </>
    )
}

export default BoxTwo
