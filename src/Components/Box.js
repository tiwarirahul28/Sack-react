import React from 'react'

const Box = ({title, price, img1, img2}) => {
    return (
        <>
        <div className="card">
            <div className="img-container">
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
            </div>
            <div className="infobox">
                <div class="title">
                    {title} Bag 
                </div>
                <div className="price">
                   Rs: {price}/-
                </div>
                <div className="buttongroup">
                    <button className="buy">
                        Buy Now
                    </button>
                    <button className="addtocart">
                        Add To Cart 
                    </button>
                </div>
            </div>
        </div>
    </>
    )
}

export default Box
