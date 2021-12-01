import React from 'react'
import { NavLink } from 'react-router-dom'
import about from '../assets/images/school-bag.jpg'
import './about.css'

const About = () => {
    return (
        <>
        <main className="page">
            <section className="about-page">
                <article>
                    <h2>Why Shop With Us?</h2>
                    <p>
                       Your time is precious, and that's why we can't have you trying to hunt down the newest design bags when you could find them all in one place! 
                    </p>
                    <p>
                        Ever since S@ck inception in 2020, we're been bringing you the latest collections and exclusives from the most in demand design.
                    </p>
                    <NavLink to="/contact" className="btn">Contact</NavLink>
                </article>
                <img 
                src={about}
                alt=""
                className="img about-img"
                />
            </section>
        </main>
        </>
    )
}

export default About
