import React from 'react'
import { NavLink } from 'react-router-dom'
import about from '../assets/images/school-bag.jpg'
// import AboutItem from '../Components/AboutItem'
import './about.css'
const About = () => {
    return (
        <>
        <main className="page">
            <section className="about-page">
                <article>
                    <h2>I'm baby coloring book poke taxidermy</h2>
                    <p>
                        Taxidermy forage glossier letterpress heirloom before they sold out
                        you probably haven't heard of them banh mi biodiesel chia.
                    </p>
                    <p>
                        Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
                        retro.
                    </p>
                    <NavLink to="/contact" className="btn">Contact</NavLink>
                </article>
                <img 
                src={about}
                alt=""
                className="img about-img"
                />
            </section>
            {/* <AboutItem/> */}
        </main>
        </>
    )
}

export default About
